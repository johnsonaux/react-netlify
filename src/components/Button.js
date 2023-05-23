
export function MyButton({count, buttonClicked}) {

    return (
        <div>
            <button onClick={buttonClicked}>
                Clicked {count} times
            </button>
        </div>
    );
}
