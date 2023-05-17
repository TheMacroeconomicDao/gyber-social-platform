import { Avatar, Card, message } from 'antd'

export const Groups = () => {
    let CardGridStyles = {
        border: 'none',
        cursore: 'pointer',
    }

    const groupsData = [
        {
            id: 1,
            title: 'Group1'
        },
        {
            id: 2,
            title: 'Group2'
        },
        {
            id: 3,
            title: 'Group3'
        },
        {
            id: 4,
            title: 'Group4'
        },
        {
            id: 5,
            title: 'Group5'
        },
        {
            id: 6,
            title: 'Group6'
        },
    ]

    return (
        <Card 
            title="Groups" 
            extra={<a href="#">More</a>} 
            style={{ width: 300 }}
        >
            {
                groupsData.map((el) => (
                    <Card.Grid
                        key={el.id}
                        style={CardGridStyles}
                        hoverable={false}
                        onClick={() => message.info("Damn, it doesn't work :(")}
                    >
                        <Avatar
                            size={50}
                        />
                    </Card.Grid>
                ))
            }
        </Card>
    )
}
