import Skill from './Skill';

const Box = ({ title, data }) => {
    return (
      <div className="skills__container__content">
        <div className="skills__container__content__header">
          <h2 className="skills__container__content__items__title">{title}</h2>
        </div>
  
        <ul className="skills__container__content__items" id="tools_text_front_end">
          {data.map((item, index) => (
            <Skill item={item} key={index} data={data}/>
          ))}
        </ul>
      </div>
    );
  };
  
  export default Box;