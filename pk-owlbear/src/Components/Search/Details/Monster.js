import { parseTextToHtml } from '../../../Logic/Utility';
import './Monster.css';

export const Monster = ({detail}) => {

    return detail !== null ? (
        <div className="monster">
            <div className="basic-info">
                {detail.img_main !== null ? <img src={detail.img_main} /> : null}
                <span>{detail.size}, {detail.type} {detail.subtype !== "" ? "(" + detail.subtype + ")" : null}</span>
                <span>AC: {detail.armor_class} ({detail.armor_desc})</span>
                <span>Hit points: {detail.hit_points} ({detail.hit_dice})</span>
                {detail.damage_immunities !== "" ? <span>Immunities: {detail.damage_immunities}</span> : null}
                {detail.damage_resistances !== "" ? <span>Resistance: {detail.damage_resistances}</span> : null}
                {detail.damage_vulnerabilities !== "" ? <span>Vulnerabilities: {detail.damage_vulnerabilities}</span> : null}
                {detail.condition_immunities !== "" ? <span>Condition Immunities: {detail.condition_immunities}</span> : null}
                {detail.languages !== "-" ? <span>Languages: {detail.languages}</span> : null}
                {Object.keys(detail.speed).length > 0 ? <span>Speed: {Object.keys(detail.speed).map((item, index) => <span>{item + ":" + detail.speed[item]} </span>)}</span> : null}
                {detail.senses !== "" ? <span>Senses: {detail.senses}</span> : null}
                {Object.keys(detail.skills).length > 0 ? <span>Skills: {Object.keys(detail.skills).map((item, index) => <span>{item + ":" + detail.skills[item]} </span>)}</span> : null}
                <span>CR: {detail.cr}</span>
                <br/>
                <div className='description' dangerouslySetInnerHTML={{__html: parseTextToHtml(detail.desc)}}></div>
            </div>
            <div className="attributes">
                <div className='attribute'>
                    <span>{detail.strength}</span>
                    <b>STR</b>
                    <span>{detail.strength_save}</span>
                </div>
                <div className='attribute'>
                    <span>{detail.dexterity}</span>
                    <b>DEX</b>
                    <span>{detail.dexterity_save}</span>
                </div>
                <div className='attribute'>
                    <span>{detail.constitution}</span>
                    <b>CON</b>
                    <span>{detail.constitution_save}</span>
                </div>
                <div className='attribute'>
                    <span>{detail.intelligence}</span>
                    <b>INT</b>
                    <span>{detail.intelligence_save}</span>
                </div>
                <div className='attribute'>
                    <span>{detail.wisdom}</span>
                    <b>WIS</b>
                    <span>{detail.wisdom_save}</span>
                </div>
                <div className='attribute'>
                    <span>{detail.charisma}</span>
                    <b>CHA</b>
                    <span>{detail.charisma_save}</span>
                </div>
            </div>
            {detail.actions !== null ? (
                <div className='actions'>
                    <b>Actions</b>
                    {detail.actions.map((item, index) => {
                        return (
                            <div className='action' key={index}>
                                <b>{item.name}</b>
                                <p>{item.desc}</p>
                            </div>
                        )
                    })}
                </div>
            ) : null}
            {detail.bonus_actions !== null ? (
                <div className='bonus-actions'>
                    <b>Bonusactions</b>
                    {detail.bonus_actions.map((item, index) => {
                        return (
                            <div className='bonus-action' key={index}>
                                <b>{item.name}</b>
                                <p>{item.desc}</p>
                            </div>
                        )
                    })}
                </div>
            ) : null}
            {detail.reactions !== null ? (
                <div className='reactions'>
                    <b>Reactions</b>
                    {detail.reactions.map((item, index) => {
                        return (
                            <div className='reaction' key={index}>
                                <b>{item.name}</b>
                                <p>{item.desc}</p>
                            </div>
                        )
                    })}
                </div>
            ) : null}
            {detail.legendary_actions !== null ? (
                <div className='legendary-actions'>
                    <b>Legendary Actions</b>
                    {detail.legendary_actions.map((item, index) => {
                        return (
                            <div className='legendary-action' key={index}>
                                <b>{item.name}</b>
                                <p>{item.desc}</p>
                            </div>
                        )
                    })}
                </div>
            ) : null}
        </div>
    ) : null;
};