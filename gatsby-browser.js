/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it
//
// import wrapWithProvider from './wrapWithProvider';
// export const wrapRootElement = wrapWithProvider;

export const onServiceWorkerUpdateReady = () => {
    const answer = window.confirm(
        `This application has been updated. ` +
        `Reload to display the latest version?`
    );
    if (answer === true) {
        window.location.reload()
    }
}
export const onInitialClientRender = () => {
    // setTimeout(function() {
    //     document.getElementById("___loader").style.display = "none"
    // }, 100)
}