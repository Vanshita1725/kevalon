## Plan: Update npm to version 11.13.0

Update the global npm installation from 10.9.3 to 11.13.0 to benefit from new features, bug fixes, and dependency updates. This is a major version update, but based on the changelog, no changes are required for this React Router project.

**Steps**
1. Run the update command: `npm install -g npm@11.13.0`
2. Verify the update by checking the version: `npm --version`

**Relevant files**
- No project files need modification.

**Verification**
1. Confirm npm version is 11.13.0 after update.
2. Run project scripts (e.g., `npm run dev`) to ensure no regressions.

**Decisions**
- No breaking changes affect this project (private package, no prepare scripts, no hooks, Node 22 compatible).
- Update globally as recommended by npm notice.