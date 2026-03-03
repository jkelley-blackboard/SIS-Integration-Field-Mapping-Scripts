# Course–Node Association Guide (Snapshot & IMS LIS)

## 1. Overview
Blackboard’s **Institutional Hierarchy** organizes courses into nodes.
Through the **SIS Integration Framework**, courses can be associated with:
- **Primary Node**
- **Secondary / Additional Nodes**

The method differs between:
1. **Snapshot (Delimited Flat File)**
2. **IMS LIS (Standards-Based XML)**

Snapshot supports multiple files. LIS defines associations only inside the Course entity.

---

## 2. Snapshot Integration (Delimited Flat File)
Snapshot supports two mechanisms:
1. **Snapshot Course File**
2. **Snapshot Course Associations File** *(recommended for secondaries)*

### 2.1 Snapshot Course File Method

#### Primary Node Fields
- `primary_external_node_key` — The "Identifier" for the primary node.
- `external_association_key` — Unique identifier for this association.

The bestpractce convention is to construct `external_association_key` by concatenatinating the `external_course_key` and the `primary_external_node_key` with `=`.  For example:
```
A_A_ENGL_150_05_SP23=ASCD-GNED-GNEDPGM
A_A_MATH_140_08_SP20=ASCD-GNED-GNEDPGM
```

If `external_association_key` duplicates an existing value you may see this error:
```
duplicate key value violates unique constraint "domain_course_coll_uid_ak1"
```

### Secondary Node Associations (Course File)
Field: **Added Node Batch Uid**
- Note that this field name may be duplicated in the UI.  Just use the 1st one.

**Key Behaviors:**
- Always expects an **array**, even for one value
- Cannot be populated directly in flat file
- Must be populated via a **mapping script**
- SIS interprets script output as multiple secondary associations

**Auto‑generated keys:**
- Blackboard generates unique association keys automatically using the convention noted above.
- These keys are **not reusable**, even if removed later

---

## ⭐ Strong Recommendation: Use Snapshot Course Associations File for Secondary Nodes
Reasons:
- No array scripting
- You control the association keys
- Avoids Blackboard’s non‑reusable auto-generated keys
- Easier to maintain, troubleshoot, and audit

---

## 2.2 Snapshot Course Associations File
Each row = one course–node relationship.

### Fields
- `external_association_key` — Globally unique ID for the association
- `external_course_key` — Course ID
- `external_node_key` — Node ID
- `is_primary_association` — `Y/N` or `true/false`

**Rules:**
- Exactly one primary association per course
- Secondary nodes = additional rows with unique keys
- No scripting required
- No auto-generated keys

---

## 3. IMS LIS Integration (Standards‑Based XML)
- LIS defines all associations inside the **Course entity**. There is **no association entity**.
- Field map scripts are required to properly extract values from the LIS XML records.
- Clients often need to configure the SIS system (eg. Ellucian ILP) to include the requried data.

### 3.1 Primary Node (LIS Course Record)
The logic is the same as snapshot
#### Primary Node Fields
- `primary_external_node_key` — The "Identifier" for the primary node.
- `external_association_key` — Unique identifier for this association.
#### Mapping



### 3.2 Secondary Nodes (LIS)
- Represented as **repeating node-association elements**
- Behave like an array
- Must be populated using SIS mapping scripts
- Cannot be provided as text in a flat file

---

## 4. Best Practices (Snapshot & LIS)
- Use Snapshot **Course Associations File** for secondary nodes
- Ensure `external_association_key` values are globally unique
- Do not place arrays directly inside delimited fields
- Maintain consistent node IDs with Institutional Hierarchy
- Understand that **Added Node Batch Uid always expects an array** and requires scripting

---

