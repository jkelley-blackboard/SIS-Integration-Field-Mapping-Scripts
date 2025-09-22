# Blackboard SIS Custom Field Mapping Reference

This document provides examples of how to access data fields in Blackboard SIS custom mapping scripts using the Java Map syntax.

---

## 1. Person
**TBD**

This section will cover how to access and manipulate **Person** (user) fields such as:
- Names
- Emails
- Roles
- External IDs

---

## 2. Course Section
**TBD**

This section will describe how to work with **Course Sections**, including:
- Course name and ID
- Catalog information
- Dates and availability
- Data source mapping

---

## 3. Course Membership
**TBD**

This section will provide details on **Course Membership** objects, which link persons to course sections:
- Roles (student, instructor, etc.)
- Availability
- Enrollment statuses

---

## 4. Term (Group Record)

This section covers **Term records**, which are represented as `groupRecord` objects in SIS integration scripts.

| Blackboard Field                        | Java Map Syntax                                          |
| --------------------------------------- | -------------------------------------------------------- |
| **Term Name** (`<shortDescription>`)    | `data.getGroup().getDescription().getShortDescription()` |
| Term Start Date (`<timeframe><begin>`)  | `data.getGroup().getTimeframe().getBegin()`              |
| Term End Date (`<timeframe><end>`)      | `data.getGroup().getTimeframe().getEnd()`                |
| Sourced ID (`<sourcedGUID><sourcedId>`) | `data.getSourcedGUID().getSourcedId()`                   |
| Data Source                             | `data.getGroup().getDataSource()`                        |

### Example XML Source for Term

```xml
<groupRecord>
  <sourcedGUID>
    <refAgentInstanceID>ID</refAgentInstanceID>
    <sourcedId>fall_2025</sourcedId>
  </sourcedGUID>
  <group>
    <timeframe>
      <begin>2025-08-15</begin>
      <end>2025-12-20</end>
      <restrict>true</restrict>
    </timeframe>
    <description>
      <shortDescription>Fall 2025</shortDescription>
    </description>
    <dataSource>LMS_IMPORT</dataSource>
  </group>
</groupRecord>
