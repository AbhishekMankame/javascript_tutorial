// PascalCasing
function Message () {
    // JSX: JavaScript XML --> This code under the hook is going to get compile to JavaScript
    const name = 'Mosh';
    if(name)
        return <h1>Hello {name}</h1>;
    return <h1>Hello World</h1>;
}

export default Message;