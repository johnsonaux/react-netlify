export function Header() {

    const user = {
        name: 'Marc',
        mageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
        imageSize: 90
    }

    let header;
    if (user.name === 'Marc') {
        header = <h1>Welcome to my app {user.name}</h1>
    } else {
        header = <h1>Welcome to my app anonymous</h1>
    }

    return (
        <div>
            {header}
            <img
                className="avatar"
                src={user.mageUrl}
                alt={'Photo of ' + user.name}
                style={{
                    width: user.imageSize,
                    height: user.imageSize,
                }}
            />
        </div>
    )
}
