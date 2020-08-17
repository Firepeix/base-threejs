import Program from "./App/Program";
function run() {
    const program = new Program();
    render(program)
}

function render(program) {
    requestAnimationFrame(() => {
        render(program);
    });
    program.animate();
}

run()

