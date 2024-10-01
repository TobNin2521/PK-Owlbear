import './Class.css';
import { parseTextToHtml } from '../../../Logic/Utility';

export const Class = ({detail}) => {

    return detail !== null ? (
        <div className='class'>
            <div className='basic-info'>
                <span>Spellcasting: {detail.spellcasting_ability}</span>
                <span>Hit dice: {detail.hit_dice}</span>
                <span>Armor: {detail.prof_armor}</span>
                <span>Saving throws: {detail.prof_saving_throws}</span>
                <span>Skills: {detail.prof_skills}</span>
                <span>Tools: {detail.prof_tools}</span>
                <span>Weapons: {detail.prof_weapons}</span>
                <br/>
                <p>{detail.equipment}</p>
                <br/>
                <div className='description' dangerouslySetInnerHTML={{__html: parseTextToHtml(detail.desc)}}></div>
            </div>
            <div className='archetypes'>
                <b>{detail.subtypes_name}</b>
                {detail.archetypes.map((item, index) => {
                    return (
                        <div className='archetype' key={index}>
                            <b>{item.name}</b>
                            <p>{item.desc}</p>
                        </div>
                    )
                })}
            </div>
            <div className='class-table'>
                {detail.table.split('\n').map((item, index) => {
                    return <div key={index} className='class-table-row'>{item}</div>
                })}
            </div>
        </div>
    ) : null
};