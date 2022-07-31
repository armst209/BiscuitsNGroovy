import { defineConfig } from "vite";
import react from "@vitejs/plugin-react"
import envCompatible from "vite-plugin-env-compatible"
import { NodeGlobalsPolyfillPlugin } from "@esbuild-plugins/node-globals-polyfill"
import svgrPlugin from "vite-plugin-svgr"
import path from "path"


export default defineConfig({
    envPrefix: "REACT_APP_",
    optimizeDeps: {
        esbuildOptions: {
            //Node.js global to browser globalThis
            define: {
                global: "globalThis",
            },
            //Enable esbuild polyfill plugins
            plugins: [
                NodeGlobalsPolyfillPlugin({
                    buffer: true,
                }),
            ],
        },
    },
    plugins: [
        react(),
        envCompatible(),
        svgrPlugin({
            svgrOptions: {
                icon: true,
            }
        })],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        }
    }
})