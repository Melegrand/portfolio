const Skill = ({ item }) => {

    return (
        <>
            <li className="tool tool__text active">{item.name}</li>
            <li className='tool tool__img active'><img alt='' className='tool_img' src={item.src} /></li>
        </>
    );
}

export default Skill;