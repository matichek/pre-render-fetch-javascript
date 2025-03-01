if (document.prerendering) {
    document.addEventListener("prerenderingchange", main, { once: true });

} else {
    main();
}


function main() {

    setTimeout(() => {
        document.body.append("Timeout finished");
    }, 1000);
}
