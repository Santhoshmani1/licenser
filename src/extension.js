const vscode = require("vscode");
const { getLicense } = require("./utils/getLicense");

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  console.log('Congratulations, your extension "vs-licenser" is now active!');

  context.subscriptions.push(
    vscode.commands.registerCommand("licenser.addLicense", () => {
      const licenses = ["MIT", "Apache 2.0"];
      vscode.window
        .showQuickPick(licenses, { placeHolder: "Select a license" })
        .then((selectedLicense) => {
          if (selectedLicense) {
            const editor = vscode.window.activeTextEditor;
            if (editor) {
              const edit = new vscode.WorkspaceEdit();
              edit.insert(
                editor.document.uri,
                editor.selection.active,
                getLicense(selectedLicense)
              );

              return vscode.workspace.applyEdit(edit);
            }
          }
        })
        .catch((err) => console.error("Unable to set license", err));
    })
  );
}

function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
