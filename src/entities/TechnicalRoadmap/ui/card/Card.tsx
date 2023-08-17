import cls from './Card.module.scss'
import {CardItem, CardItemProps} from '../cardItem/CardItem'
import { RoadLine } from '../roadline/roadline';

interface CardProps {
    id: number;
    items: CardItemProps[]
}

const suffix = new Map(
    [
        [1, 'st'],
        [2, 'nd'],
        [3, 'rd'],
        [4, 'th'],
        [5, 'th']
    ]
);

export const Card = ({id, items}: CardProps) => {
    return (
        <div className={cls.Card}>
            <div className={cls.StageWrapper}>
                <h3>{id}<sup>{suffix.has(id) ? suffix.get(id): 'th'}</sup></h3>
                <span>Year</span>
            </div>
            <div className={cls.ItemWrapper}>
                {items.map((item, index) => <CardItem key={index} title={item.title} status={item.status}/>)}
            </div>
            {id !== 5 &&<RoadLine className={cls.Line}/>}
        </div>
    )
}