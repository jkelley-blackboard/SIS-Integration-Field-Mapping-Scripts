## SIS Integration Field Mapping Scripts

This repository contains sample JavaScript scripts for mapping fields in SIS (Student Information System) integrations.

### Features
- Sample scripts based on customer use cases
- Reference links for LIS formatted files and related documentation

### Usage
These scripts are provided for reference and educational purposes. No support or warranty is offered.

See the [LICENSE](LICENSE) file for license details.

### Useful Links
- [Sample LIS formatted files](https://github.com/blackboard/bbdn-lis_samples)
- [Help page on scripting](https://help.anthology.com/test-blackboard-administrator/en/integrations/student-information-system--sis-/snapshot-flat-file/snapshot-flat-file-custom-field-mapping.html)
- [RHINO 1.7.13 Info](https://p-bakker.github.io/rhino/releases/new_in_rhino_1.7.13.html)
- [RHINO Engine Compatibility](https://mozilla.github.io/rhino/compat/engines.html)

# Guidance for Authoring Custom SIS Field Mapping Scripts in Blackboard

Custom scripting for SIS field mapping in Blackboard is powerful, but that power comes with responsibility. These scripts often live a long time, outlast their authors, and become critical to data integrity.

---

## 1. Documentation: More Is Better Than Less

I am not always fastidious about documentation—but for SIS field mapping scripts, **more documentation is always better**.

### Use the Integration Comment Box
Use the integration's **comment box** as a front-door summary:

- What the script does
- Which fields are manipulated
- Why the script exists
- Who authored or last updated it
- When it was last modified
- Where additional documentation lives (repo, ticket, wiki)

### Comment Your Code Generously
Comment each major section of the script. Explain *why* logic exists, not just *what* it does.

---

## 2. Use Helper Functions for Logging

Leverage the provided helper functions to report success, failure, and transformation details to the SIS integration logs.
Learn more about helpers on [custom_scripting_help.md](https://github.com/jkelley-blackboard/SIS-Integration-Field-Mapping-Scripts/blob/main/custom_scripting_help.md)

Benefits:
- Clear visibility into script execution
- Faster troubleshooting
- Safer long-term maintenance

Avoid silent failures. Every script should clearly log when it runs and what it attempts to do.

---

## 3. Identify the Field Being Manipulated

Always define a readable logging prefix string identifying the field and purpose.

```javascript
var sField = 'Primary Node Batch Uid Script '; // Logging prefix
```

Use this string consistently in helper calls so log entries are easy to interpret.

---

## 4. Basic Error Handling

There is **no substitute for basic error handling**.

- Guard against null or missing values
- Expect unexpected SIS input
- Log errors with actionable detail

Fail safe, not silent. Clear logging beats hidden corruption.

---

## Final Thoughts

These scripts are infrastructure code. Optimize for clarity, observability, and maintainability over cleverness.

Well-documented, well-logged scripts save time and prevent data issues long after their original author has moved on.
