import './Spell.css';
import { parseTextToHtml } from '../../../Logic/Utility';

export const Spell = ({detail}) => {

    return detail !== null ? (
        <div className='spell'>
            <div className='basic-info'>
                <span>Type: {detail.school}</span>
                <span>Level: {detail.level}</span>
                <span>Classes: {detail.dnd_class}</span>
                <span>Components: {detail.components}</span>
                <span>Casting time: {detail.casting_time}</span>
                <span>Range: {detail.range}</span>
                <span>Concentration: {detail.concentration}</span>
                <span>Ritual: {detail.ritual}</span>
                <span>Ducration: {detail.duration}</span>
                <br/>
                <div className='description' dangerouslySetInnerHTML={{__html: parseTextToHtml(detail.desc)}}></div>
                {detail.higher_level !== "" ? <div className='description' dangerouslySetInnerHTML={{__html: parseTextToHtml(detail.higher_level)}}></div> : null}
            </div>
        </div>
    ) : null
};