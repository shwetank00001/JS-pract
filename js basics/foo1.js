const x = 10;

const outer = () => {

    const inner = () => {
        console.log(x);
    };

    return inner;
};

const foo = outer();
foo();

