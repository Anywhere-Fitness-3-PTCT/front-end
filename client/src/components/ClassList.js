// Client Class list

export default function ClassList(props) {
    return (
        <div>
            {props.ClassList.map(class => (
                <Class />
            ))}
        </div>
    )
}
