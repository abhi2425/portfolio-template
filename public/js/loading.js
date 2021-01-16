function loading() {
    setTimeout(() => {
        document.getElementById("loader").style.display = "none";
        let screenWidth = window.matchMedia("(max-width: 600px)")

        function mediaQueriesChecker(screenWidth) {
            if (screenWidth.matches) { // If media query matches
                document.getElementById("container").style.display = "flex";
                document.getElementById("container").style.flexDirection = "column";
            } else {
                document.getElementById("container").style.display = "grid";
            }
        }
        mediaQueriesChecker(screenWidth)
        screenWidth.addListener(mediaQueriesChecker)
    }, 2000);
}