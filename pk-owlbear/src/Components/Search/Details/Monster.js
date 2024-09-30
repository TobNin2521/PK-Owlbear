import './Monster.css';

export const Monster = ({detail}) => {

    return detail !== null ? (
        <div className="monster">
            <div className="basic-info">
                {detail.img_main !== null ? <img src={detail.img_main} /> : null}
                <span>{detail.size}, {detail.type} {detail.subtype !== "" ? "(" + detail.subtype + ")" : null}</span>
                <span>AC: {detail.armor_class} ({detail.armor_desc})</span>
                <span>Hit points: {detail.hit_points} ({detail.hit_dice})</span>
                <span>Immunities: {detail.damage_immunities}</span>
                <span>Resistance: {detail.damage_resistances}</span>
                <span>Vulnerabilities: {detail.damage_vulnerabilities}</span>
                <span>Condition Immunities: {detail.condition_immunities}</span>
                <span>Languages: {detail.languages}</span>
                <span>Speed: {Object.keys(detail.speed).map((item, index) => <span>{item + ":" + detail.speed[item]} </span>)}</span>
                <span>Senses: {detail.senses}</span>
                <span>Skills: {Object.keys(detail.skills).map((item, index) => <span>{item + ":" + detail.skills[item]} </span>)}</span>
                <span>CR: {detail.cr}</span>
                <br/>
                <p>{detail.desc}</p>
            </div>
            <div className="attributes">
                <div className='attribute'>
                    <span>{detail.strength}</span>
                    <span>STR</span>
                    <span>{detail.strength_save}</span>
                </div>
                <div className='attribute'>
                    <span>{detail.dexterity}</span>
                    <span>DEX</span>
                    <span>{detail.dexterity_save}</span>
                </div>
                <div className='attribute'>
                    <span>{detail.constitution}</span>
                    <span>CON</span>
                    <span>{detail.constitution_save}</span>
                </div>
                <div className='attribute'>
                    <span>{detail.intelligence}</span>
                    <span>INT</span>
                </div>
                <div className='attribute'>
                    <span>{detail.wisdom}</span>
                    <span>WIS</span>
                    <span>{detail.wisdom_save}</span>
                </div>
                <div className='attribute'>
                    <span>{detail.charisma}</span>
                    <span>CHA</span>
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