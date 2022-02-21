var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[Object.keys(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toModule(require("react"));
  }
});

// node_modules/remix/client.js
var require_client = __commonJS({
  "node_modules/remix/client.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var react = require("@remix-run/react");
    Object.defineProperty(exports, "Form", {
      enumerable: true,
      get: function() {
        return react.Form;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: true,
      get: function() {
        return react.Link;
      }
    });
    Object.defineProperty(exports, "Links", {
      enumerable: true,
      get: function() {
        return react.Links;
      }
    });
    Object.defineProperty(exports, "LiveReload", {
      enumerable: true,
      get: function() {
        return react.LiveReload;
      }
    });
    Object.defineProperty(exports, "Meta", {
      enumerable: true,
      get: function() {
        return react.Meta;
      }
    });
    Object.defineProperty(exports, "NavLink", {
      enumerable: true,
      get: function() {
        return react.NavLink;
      }
    });
    Object.defineProperty(exports, "Outlet", {
      enumerable: true,
      get: function() {
        return react.Outlet;
      }
    });
    Object.defineProperty(exports, "PrefetchPageLinks", {
      enumerable: true,
      get: function() {
        return react.PrefetchPageLinks;
      }
    });
    Object.defineProperty(exports, "RemixBrowser", {
      enumerable: true,
      get: function() {
        return react.RemixBrowser;
      }
    });
    Object.defineProperty(exports, "RemixServer", {
      enumerable: true,
      get: function() {
        return react.RemixServer;
      }
    });
    Object.defineProperty(exports, "Scripts", {
      enumerable: true,
      get: function() {
        return react.Scripts;
      }
    });
    Object.defineProperty(exports, "ScrollRestoration", {
      enumerable: true,
      get: function() {
        return react.ScrollRestoration;
      }
    });
    Object.defineProperty(exports, "useActionData", {
      enumerable: true,
      get: function() {
        return react.useActionData;
      }
    });
    Object.defineProperty(exports, "useBeforeUnload", {
      enumerable: true,
      get: function() {
        return react.useBeforeUnload;
      }
    });
    Object.defineProperty(exports, "useCatch", {
      enumerable: true,
      get: function() {
        return react.useCatch;
      }
    });
    Object.defineProperty(exports, "useFetcher", {
      enumerable: true,
      get: function() {
        return react.useFetcher;
      }
    });
    Object.defineProperty(exports, "useFetchers", {
      enumerable: true,
      get: function() {
        return react.useFetchers;
      }
    });
    Object.defineProperty(exports, "useFormAction", {
      enumerable: true,
      get: function() {
        return react.useFormAction;
      }
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: true,
      get: function() {
        return react.useHref;
      }
    });
    Object.defineProperty(exports, "useLoaderData", {
      enumerable: true,
      get: function() {
        return react.useLoaderData;
      }
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: true,
      get: function() {
        return react.useLocation;
      }
    });
    Object.defineProperty(exports, "useMatches", {
      enumerable: true,
      get: function() {
        return react.useMatches;
      }
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: true,
      get: function() {
        return react.useNavigate;
      }
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: true,
      get: function() {
        return react.useNavigationType;
      }
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: true,
      get: function() {
        return react.useOutlet;
      }
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: true,
      get: function() {
        return react.useOutletContext;
      }
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: true,
      get: function() {
        return react.useParams;
      }
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: true,
      get: function() {
        return react.useResolvedPath;
      }
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: true,
      get: function() {
        return react.useSearchParams;
      }
    });
    Object.defineProperty(exports, "useSubmit", {
      enumerable: true,
      get: function() {
        return react.useSubmit;
      }
    });
    Object.defineProperty(exports, "useTransition", {
      enumerable: true,
      get: function() {
        return react.useTransition;
      }
    });
  }
});

// node_modules/remix/server.js
var require_server = __commonJS({
  "node_modules/remix/server.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports, "createCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSessionStorage;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: true,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: true,
      get: function() {
        return serverRuntime.redirect;
      }
    });
  }
});

// node_modules/remix/platform.js
var require_platform = __commonJS({
  "node_modules/remix/platform.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var node = require("@remix-run/node");
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createFileSessionStorage;
      }
    });
    Object.defineProperty(exports, "unstable_createFileUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createFileUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: true,
      get: function() {
        return node.unstable_parseMultipartFormData;
      }
    });
  }
});

// node_modules/remix/index.js
var require_remix = __commonJS({
  "node_modules/remix/index.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var client = require_client();
    var server = require_server();
    var platform = require_platform();
    Object.keys(client).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return client[k];
          }
        });
    });
    Object.keys(server).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return server[k];
          }
        });
    });
    Object.keys(platform).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return platform[k];
          }
        });
    });
  }
});

// <stdin>
__export(exports, {
  assets: () => import_assets.default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();
var import_server = __toModule(require("react-dom/server"));
var import_remix = __toModule(require_remix());
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  const markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route-module:C:\Users\Kevin\Documents\Projects\hause-website-remix\app\root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
init_react();
var import_remix2 = __toModule(require_remix());

// app/styles/global.css
var global_default = "/build/_assets/global-XDL4V5KN.css";

// route-module:C:\Users\Kevin\Documents\Projects\hause-website-remix\app\root.tsx
var import_react_bootstrap = __toModule(require("react-bootstrap"));

// app/styles/tailwind.css
var tailwind_default = "/build/_assets/tailwind-J5PJ6HWN.css";

// route-module:C:\Users\Kevin\Documents\Projects\hause-website-remix\app\root.tsx
function links() {
  return [{ rel: "stylesheet", href: tailwind_default }, { rel: "stylesheet", href: global_default }];
}
var meta = () => {
  const description = "Dave Hause official website";
  const keywords = "Dave Hause";
  return {
    description,
    keywords
  };
};
function App() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Document, null, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement(import_remix2.Outlet, null))));
}
function Document({ children, title }) {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1"
  }), /* @__PURE__ */ React.createElement(import_remix2.Links, null), /* @__PURE__ */ React.createElement("title", null, title ? title : "Dave Hause")), /* @__PURE__ */ React.createElement("body", null, children, false ? /* @__PURE__ */ React.createElement(LiveReload, null) : null));
}
function Layout({ children }) {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(import_react_bootstrap.Navbar, {
    bg: "NavBar",
    variant: "dark",
    sticky: "top",
    expand: "lg"
  }, /* @__PURE__ */ React.createElement(import_react_bootstrap.Navbar.Toggle, null), /* @__PURE__ */ React.createElement(import_react_bootstrap.Navbar.Collapse, null, /* @__PURE__ */ React.createElement("nav", {
    className: "navbar"
  }, /* @__PURE__ */ React.createElement(import_remix2.Link, {
    to: "/",
    className: "logo"
  }, "Dave Hause"), /* @__PURE__ */ React.createElement("ul", {
    className: "nav"
  }, /* @__PURE__ */ React.createElement("li", null), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_remix2.Link, {
    to: "/News"
  }, "News")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_remix2.Link, {
    to: "/TourDates"
  }, "Tour Dates")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_remix2.Link, {
    to: "/Bio"
  }, "Bio")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "https://store.davehause.com/"
  }, "Store")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_remix2.Link, {
    to: "/Releases"
  }, "Releases")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_remix2.Link, {
    to: "/Archive"
  }, "Archive")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_remix2.Link, {
    to: "/SocialFollow"
  }, "Follow")))))), /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, children), /* @__PURE__ */ React.createElement("div", null));
}

// route-module:C:\Users\Kevin\Documents\Projects\hause-website-remix\app\routes\archive\$archiveDateId.jsx
var archiveDateId_exports = {};
__export(archiveDateId_exports, {
  default: () => archiveDateId_default,
  loader: () => loader
});
init_react();
var import_remix3 = __toModule(require_remix());

// app/utils/db.server.ts
init_react();
var import_client = __toModule(require("@prisma/client"));
var db;
if (true) {
  db = new import_client.PrismaClient();
  db.$connect();
} else {
  if (!global.__db) {
    global.__db = new import_client.PrismaClient();
    global.__db.$connect();
  }
  db = global.__db;
}

// route-module:C:\Users\Kevin\Documents\Projects\hause-website-remix\app\routes\archive\$archiveDateId.jsx
var loader = async ({ params }) => {
  const archivedate = await db.archive.findUnique({
    where: { id: params.archiveDateId }
  });
  if (!archivedate)
    throw new Error("Date not found");
  const data = { archivedate };
  return data;
};
function ArchiveDate() {
  const { archivedate } = (0, import_remix3.useLoaderData)();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", null, archivedate.venue)), /* @__PURE__ */ React.createElement("div", {
    className: "box"
  }, /* @__PURE__ */ React.createElement("p", null, archivedate.setlist)));
}
var archiveDateId_default = ArchiveDate;

// route-module:C:\Users\Kevin\Documents\Projects\hause-website-remix\app\routes\news\$newsItemId.jsx
var newsItemId_exports = {};
__export(newsItemId_exports, {
  default: () => newsItemId_default,
  loader: () => loader2
});
init_react();
var import_remix4 = __toModule(require_remix());
var loader2 = async ({ params }) => {
  const newsitem = await db.hausenews.findUnique({
    where: { id: params.newsItemId }
  });
  if (!newsitem)
    throw new Error("Article not found");
  const data = { newsitem };
  return data;
};
function NewsItem() {
  const { newsitem } = (0, import_remix4.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "rcorners1"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    className: "box"
  }, /* @__PURE__ */ React.createElement("h2", null, newsitem.title))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", null, newsitem.body)));
}
var newsItemId_default = NewsItem;

// route-module:C:\Users\Kevin\Documents\Projects\hause-website-remix\app\routes\archive\archive.jsx
var archive_exports = {};
__export(archive_exports, {
  default: () => archive_default
});
init_react();
var import_remix5 = __toModule(require_remix());
function Archive() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", {
    className: "text-center"
  }, "Archive"), /* @__PURE__ */ React.createElement(import_remix5.Outlet, null));
}
var archive_default = Archive;

// route-module:C:\Users\Kevin\Documents\Projects\hause-website-remix\app\routes\archive\index.jsx
var archive_exports2 = {};
__export(archive_exports2, {
  default: () => archive_default2,
  loader: () => loader3
});
init_react();
var import_remix6 = __toModule(require_remix());
var import_typescript = __toModule(require("typescript"));
var loader3 = async () => {
  const data = {
    archive: await db.archive.findMany({
      take: 10,
      select: { id: true, day: true, month: true, year: true, venue: true, city: true, state: true }
    })
  };
  return data;
};
function Archive2() {
  const { archive } = (0, import_remix6.useLoaderData)();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "page-header"
  }, /* @__PURE__ */ React.createElement("h1", null, "Archive")), /* @__PURE__ */ React.createElement("ul", {
    className: "post-list"
  }, archive.map((archiveDate) => /* @__PURE__ */ React.createElement("li", {
    key: archiveDate.id
  }, /* @__PURE__ */ React.createElement(import_remix6.Link, {
    to: archiveDate.id
  }, /* @__PURE__ */ React.createElement("h4", null, archiveDate.month, " ", archiveDate.day, " ", archiveDate.year), /* @__PURE__ */ React.createElement("h5", null, archiveDate.venue, " ", archiveDate.city, ", ", archiveDate.state))))));
}
var archive_default2 = Archive2;

// route-module:C:\Users\Kevin\Documents\Projects\hause-website-remix\app\routes\socialfollow.jsx
var socialfollow_exports = {};
__export(socialfollow_exports, {
  default: () => socialfollow_default
});
init_react();
var import_react = __toModule(require("react"));
var import_react_fontawesome = __toModule(require("@fortawesome/react-fontawesome"));
var import_free_brands_svg_icons = __toModule(require("@fortawesome/free-brands-svg-icons"));
var import_si = __toModule(require("react-icons/si"));
function SocialFollow() {
  return /* @__PURE__ */ import_react.default.createElement("div", null, /* @__PURE__ */ import_react.default.createElement("h3", null, "YO ", /* @__PURE__ */ import_react.default.createElement("a", {
    href: "https://www.instagram.com/davehause/",
    target: "_blank"
  }, /* @__PURE__ */ import_react.default.createElement(import_si.SiInstagram, null))));
}
var socialfollow_default = SocialFollow;

// route-module:C:\Users\Kevin\Documents\Projects\hause-website-remix\app\routes\news\index.jsx
var news_exports = {};
__export(news_exports, {
  default: () => news_default,
  loader: () => loader4
});
init_react();
var import_remix7 = __toModule(require_remix());
var loader4 = async () => {
  const data = {
    hausenews: await db.hausenews.findMany({
      take: 10,
      select: { id: true, title: true }
    })
  };
  return data;
};
function NewsItems() {
  const { hausenews } = (0, import_remix7.useLoaderData)();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "page-header"
  }, /* @__PURE__ */ React.createElement("h1", null, "News")), /* @__PURE__ */ React.createElement("ul", {
    className: "group"
  }, hausenews.map((newsItem) => /* @__PURE__ */ React.createElement("div", {
    className: "rcorners1"
  }, /* @__PURE__ */ React.createElement("li", {
    key: newsItem.id
  }, /* @__PURE__ */ React.createElement(import_remix7.Link, {
    to: newsItem.id
  }, /* @__PURE__ */ React.createElement("h3", null, newsItem.title)))))));
}
var news_default = NewsItems;

// route-module:C:\Users\Kevin\Documents\Projects\hause-website-remix\app\routes\news\news.jsx
var news_exports2 = {};
__export(news_exports2, {
  default: () => news_default2
});
init_react();
var import_remix8 = __toModule(require_remix());
function News() {
  return /* @__PURE__ */ React.createElement("div", {
    class: "text-5xl"
  }, /* @__PURE__ */ React.createElement("h1", null, "News"), /* @__PURE__ */ React.createElement(import_remix8.Outlet, null));
}
var news_default2 = News;
I;

// route-module:C:\Users\Kevin\Documents\Projects\hause-website-remix\app\routes\tourdates.jsx
var tourdates_exports = {};
__export(tourdates_exports, {
  default: () => tourdates_default
});
init_react();
function TourDates() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", {
    className: "page-header"
  }, "Tour Dates"), /* @__PURE__ */ React.createElement("h5", null, "Here is where the BandsInTown widget will live."));
}
var tourdates_default = TourDates;

// route-module:C:\Users\Kevin\Documents\Projects\hause-website-remix\app\routes\releases.jsx
var releases_exports = {};
__export(releases_exports, {
  default: () => releases_default
});
init_react();
function Releases() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "Here is where that stream widget will live."));
}
var releases_default = Releases;

// route-module:C:\Users\Kevin\Documents\Projects\hause-website-remix\app\routes\index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => routes_default,
  loader: () => loader5
});
init_react();
var import_remix9 = __toModule(require_remix());
var loader5 = async () => {
  const data = {
    hausenews: await db.hausenews.findMany({
      take: 10,
      select: { id: true, title: true }
    })
  };
  return data;
};
function Home() {
  const { hausenews } = (0, import_remix9.useLoaderData)();
  return /* @__PURE__ */ React.createElement("main", null, /* @__PURE__ */ React.createElement("div", {
    className: "page-header"
  }, /* @__PURE__ */ React.createElement("h1", null, "The Latest")), /* @__PURE__ */ React.createElement("ul", {
    className: "group"
  }, hausenews.map((newsItem) => /* @__PURE__ */ React.createElement("div", {
    className: "rcorners1"
  }, /* @__PURE__ */ React.createElement("li", {
    key: newsItem.id
  }, /* @__PURE__ */ React.createElement(import_remix9.Link, {
    to: newsItem.id
  }, /* @__PURE__ */ React.createElement("h3", null, newsItem.title)))))));
}
var routes_default = Home;

// route-module:C:\Users\Kevin\Documents\Projects\hause-website-remix\app\routes\store.jsx
var store_exports = {};
__export(store_exports, {
  default: () => store_default
});
init_react();
function Store() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "Store"), /* @__PURE__ */ React.createElement("h3", null, "This is where Shopify will live."));
}
var store_default = Store;

// route-module:C:\Users\Kevin\Documents\Projects\hause-website-remix\app\routes\bio.jsx
var bio_exports = {};
__export(bio_exports, {
  default: () => bio_default
});
init_react();
function Bio() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", {
    className: "page-header"
  }, "About"), /* @__PURE__ */ React.createElement("div", {
    className: "bio-box"
  }, /* @__PURE__ */ React.createElement("p", null, "On a base level, the term 'blood harmony' is simple\u2014it describes the specific sound two siblings make when they sing together. Given that Dave Hause has been writing and recording songs with his younger brother Tim for a while now, it made sense to use that phrase as the title for his fifth solo record. But this being a Dave Hause album also means there's much more to it than that. Beneath the surface of Blood Harmony, in fact, are multiple layers of meaning relating to Hause's role as a musician, a brother, a husband, a son and\u2014having become a father to twins a few months before the release of 2019's Kick\u2014a dad. As such, Blood Harmony is also a reassertion of what family means to him. Even more so because it's coming out on the label owned by he and his brother. \u201CI thought Blood Harmony was a great title\u201D says Hause, \u201Cand really specific to how Tim and I have decided to work over the years. It also pertains to my children because they'll have their own Blood Harmony. So the germ of the album, the beating heart, is that I'm in a true family. I have a grounded reason to work and a bunch of people that I want to make proud with the work that we do. It's a family business.\u201D The importance of that was made all the more apparent after the coronavirus outbreak. Hause, with his brother, used that unexpected downtime to make the Patty/Paddy tribute EPs to Patty Griffin and Dillinger Four's Patrick 'Paddy' Costello. After a while, though, like all touring musicians, he found himself without an income. So when his friend and former manager offered him some work nearby as a Covid safety supervisor for the company she set up after contracting Covid herself, he said yes. It was for one of the biggest celebrities in the world, so to prepare, Hause went to LA and worked on two shoots with two of music's biggest stars. He was shocked at the scant disregard their teams had for their well-being. \u201CThese artists are so successful they never need to work again,\u201D says Hause, \u201Cbut the label and management were pushing to get away with stuff and it was totally unsafe. I was pretty disgusted seeing the industry at that level, and how much of it was simply greed and not caring about the safety of others. We were just starting to roll out the EPs on our own label, and the whole experience just ironed my resolve\u2014I'm a family artist, and I never want to be in a position where people are urging me to do things that are bad for my or my family's mental or physical health. That's not what it's about for me. It's about connection. So that experience really reinforced this idea of blood harmony. I'm connected to my people, and this is a small little thing that we're going to keep pure.\u201D You can hear Hause's passion and dedication to his craft\u2014as well as his determined approach to it\u2014flowing through the veins of Blood Harmony's ten stunning, sumptuous songs. Written with his brother over a series of weekly FaceTime sessions, they began crafting songs together in January 2021. They'd been writing remotely together since 2017's Bury Me In Philly so it wasn't an entirely new process for them, but they modified their approach slightly by giving themselves rigid deadlines. \u201CWe decided to get together on Mondays,\u201D explains Hause, \u201Cto figure out what we wanted to work on, and by Friday we had to have something you could sing to someone who wasn't a songwriter. It could be bad, but I didn't want to just have vague ideas. We called it 'Pencils-Down Fridays'. Over the course of three-and-a-half months, we ended up with 26 songs.\u201D They traveled with ten of those to Nashville, where acclaimed songwriter Will Hoge took up the helm of producer. Through Hoge's connections, what Hause calls \u201Ca staggering bunch of musicians\u201D was assembled to flesh out the songs he and Tim had written. He's not wrong. There was Brandi Carlile's drummer Chris Powell, Bruce Springsteen And The E Street band bassist Garry Tallent, acclaimed session guitarist Tom Bukovac, Jason Isbell's guitarist Sadler Vaden, and keyboardist Billy Justineau, Mike Webb, and Jen Gunderman, who have played with the likes of Eric Church, Sheryl Crow, and more. Hause is the first to admit that it was a world away from the punk rock scene he'd made his name with as frontman of The Loved Ones. \u201CThey say that when you work in any field, you're happiest when you initially get the respect of your peers,\u201D he says. \u201CThankfully, I've had that respect for some time now. But in this situation, these people were not our peers. They've operated at the highest level of the music business that is even possible, so to get their respect was so gratifying. Their kindness and commitment to making the record great because they liked the songs was tremendous. I keep saying that if anybody else likes the record, that's icing on the cake, because the way we wrote and made it was so wonderful.\u201D While nobody would say the quality of Hause's previous albums was lacking, making Blood Harmony with those musicians was nevertheless a concerted effort to ramp it up. And it does. It begins with \u201CNorthstar\u201D, a tender paean to the direction, comfort and joy his wife and twins have given him that also drives home the emotional resonance and sense of family at the center of this album. It's followed immediately by \u201CSandy Sheets\u201D, a nostalgic trip into a past long-gone that references the Gin Blossoms' \u201CHey Jealousy\u201D in its chorus, and which sounds every bit as iconic as that track. The gorgeous, lilting, paradise of \u201CHanalai\u201D captures that rare sense of peace when you're with the person you love and nothing else matters, \u201CSurfboard\u201D injects some rare, good-natured humor into the trials and tribulations of being working class\u2014something that remains, as ever, an undercurrent here\u2014while \u201CCarry The Lantern\u201D and its life-affirming, almost Thin Lizzy-esque riffs double down Hause's commitment to his sobriety and his family. \u201CA lot of being an adult for me is recommitting to your better angels instead of chasing your own tail,\u201D he says. \u201CThat song is about facing temptation but redoubling your efforts to stay committed to the higher things that compel us to be better.\u201D It's followed by the gorgeous album closer \u201CLittle Wings\u201D. Hause calls it a post-script, but it resonates much more deeply and feels more significant than that. In fact, it ends the album the same way it begins\u2014with a tender song for and about his twins that's full of the purest love and hope. It's impossible to not hear and feel just how much they and his whole family\u2014that beating heart at the center of these songs\u2014mean to him. It's a truly beautiful thing.")));
}
var bio_default = Bio;

// <stdin>
var import_assets = __toModule(require("./assets.json"));
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/archive/$archiveDateId": {
    id: "routes/archive/$archiveDateId",
    parentId: "root",
    path: "archive/:archiveDateId",
    index: void 0,
    caseSensitive: void 0,
    module: archiveDateId_exports
  },
  "routes/news/$newsItemId": {
    id: "routes/news/$newsItemId",
    parentId: "root",
    path: "news/:newsItemId",
    index: void 0,
    caseSensitive: void 0,
    module: newsItemId_exports
  },
  "routes/archive/archive": {
    id: "routes/archive/archive",
    parentId: "root",
    path: "archive/archive",
    index: void 0,
    caseSensitive: void 0,
    module: archive_exports
  },
  "routes/archive/index": {
    id: "routes/archive/index",
    parentId: "root",
    path: "archive",
    index: true,
    caseSensitive: void 0,
    module: archive_exports2
  },
  "routes/socialfollow": {
    id: "routes/socialfollow",
    parentId: "root",
    path: "socialfollow",
    index: void 0,
    caseSensitive: void 0,
    module: socialfollow_exports
  },
  "routes/news/index": {
    id: "routes/news/index",
    parentId: "root",
    path: "news",
    index: true,
    caseSensitive: void 0,
    module: news_exports
  },
  "routes/news/news": {
    id: "routes/news/news",
    parentId: "root",
    path: "news/news",
    index: void 0,
    caseSensitive: void 0,
    module: news_exports2
  },
  "routes/tourdates": {
    id: "routes/tourdates",
    parentId: "root",
    path: "tourdates",
    index: void 0,
    caseSensitive: void 0,
    module: tourdates_exports
  },
  "routes/releases": {
    id: "routes/releases",
    parentId: "root",
    path: "releases",
    index: void 0,
    caseSensitive: void 0,
    module: releases_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/store": {
    id: "routes/store",
    parentId: "root",
    path: "store",
    index: void 0,
    caseSensitive: void 0,
    module: store_exports
  },
  "routes/bio": {
    id: "routes/bio",
    parentId: "root",
    path: "bio",
    index: void 0,
    caseSensitive: void 0,
    module: bio_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
/**
 * @remix-run/node v1.1.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.1.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.1.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * remix v1.1.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
