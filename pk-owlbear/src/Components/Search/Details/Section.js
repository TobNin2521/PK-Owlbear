import './Section.css';
import { parseTextToHtml } from '../../../Logic/Utility';

export const Section = ({detail}) => {

    return detail !== null ? (
        <div className='section'>
            <div className='basic-info'>
                <b>{detail.parent}</b>
                <br/>
                <div className='description' dangerouslySetInnerHTML={{__html: parseTextToHtml(detail.desc)}}></div>
            </div>
        </div>
    ) : null
};