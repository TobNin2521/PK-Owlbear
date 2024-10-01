import './Condition.css';
import { parseTextToHtml } from '../../../Logic/Utility';

export const Condition = ({detail}) => {

    return detail !== null ? (
        <div className='condition'>
            <div className='basic-info'>
            <div className='description' dangerouslySetInnerHTML={{__html: parseTextToHtml(detail.desc)}}></div>
            </div>
        </div>
    ) : null
}