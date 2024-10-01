import './Item.css';
import { parseTextToHtml } from '../../../Logic/Utility';


export const Item = ({detail}) => {

    return detail !== null ? (
        <div className='item'>
            <div className='basic-info'>
                <span>{detail.type}, {detail.rarity}</span>
                <span>{detail.requires_attunement}</span>
                <br/>
                <div className='description' dangerouslySetInnerHTML={{__html: parseTextToHtml(detail.desc)}}></div>
            </div>
        </div>
    ) : null
};