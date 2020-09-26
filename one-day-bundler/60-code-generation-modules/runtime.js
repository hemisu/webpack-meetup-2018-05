!(function (modules) {
    var cache = {}
    var chunkResolves = {};

    window.magicJsonp = function(chunkId, newModules) {
        for (var id in newModules) {
            modules[id] = newModules[id]
        }
        chunkResolves[chunkId]();
    }
    function __magic__(id) {
        if(cache[id]) return cache[id].exports;
        var module = {
            exports: {}
        };
        modules[id](__magic__, exports, module);
        cache[id] = module;
        return module.exports;
    }
    __magic__.loadChunk = function(chunkId) {
        return new Promise((resolve) => {
            chunkResolves[chunkId] = resolve
            var script = document.createElement('script')
            script.src = "one-day-bundler/70-assets" + {0: "async"}[chunkId] + ".js";
            document.head.appendChild(script)
        })
    }

    __magic__(0)
}({

}))