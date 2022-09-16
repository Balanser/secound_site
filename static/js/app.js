import Main from "./views/Main.js";
import Contact from "./views/Contact.js";
import Blog from "./views/Blog.js";
import PostView from "./views/PostView.js";

// console.log("static Js loaded")

const pathToRegex = (path) => RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");
// console.log(pathToRegex("/posts/:id"))

// console.log("/posts/7".match(/^\/posts\/(.+)$/))

const getParams = (match) => {
    const values = match.result.slice(1);
    const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(
        (result) => result[1]
    );
    // console.log(Array.from(match.route.path.matchAll(/:\w+/g)));

    return Object.fromEntries(keys.map((key, i) => {
        // console.log(key, values[i])
        return[key, values[i]];
    }));
}
const router = async () => {

    const routes = [
        // { path: "/", view: () => console.log("viewing dashboard") },
        // { path: "/posts", view: () => console.log("viewing post") },
        // { path: "/contacts", view: () => console.log("viewing contacts") }
        { path: "/", view: Main },
        { path: "/contacts", view: Contact },
        { path: "/posts", view: Blog },
        { path: "/posts/:id", view: PostView }

    ];

    const potentialMathches = routes.map((route) => {
        return {
            route: route,
            result: location.pathname.match(pathToRegex(route.path))
        };
    });

    let match = potentialMathches.find((match) => match.result !== null);

    if (!match) {
        match = {
            route: routes[0],
            result: [location.pathname]
        };
    }

    // console.log(potentialMathches);
    // console.log(match);

    const view = new match.route.view(getParams(match));
    document.querySelector("#app").innerHTML = await view.getHtml();

    // new match.route.view();

    await markNav(location.pathname);
};

const markNav = currPath => {
    for (let n of document.querySelectorAll(".nav__link")) {
        n.classList.remove("active");
    }
 try {
    document.querySelector(`[href="${currPath}"]`).classList.add("active");
 } catch (error) {
    document.querySelector(`[href="/posts"]`).classList.add("active");
 }
    
}
const navigateTo = (url) => {
    history.pushState(null, null, url);
    router();
};

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", (e) => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    })
    router();
})





