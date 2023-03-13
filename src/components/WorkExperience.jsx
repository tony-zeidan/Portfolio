const WorkExperience = ({title, position, icon, bullets}) => {


    const getBullets = () => {
        let buffer = [];
        bullets.forEach(
            function (bullet) {
                buffer.push(<li>{bullet}</li>);
            }
        );
        return (
            <ul>
                {buffer}
            </ul>
        );
    }

    return (
        <div>
            <p>{title}</p>
            <p>{position}</p>
            {getBullets()}
        </div>
    );
}