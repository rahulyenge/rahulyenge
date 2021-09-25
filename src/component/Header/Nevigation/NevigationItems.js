import React, { useState } from 'react'
import { Menu } from 'semantic-ui-react'
import NevigationItem from './Nevigation_items/NevigationItem'
import { connect } from 'react-redux';


const NevigationItems = (props) => {

    const [activeItem, setActiveItem] = useState('signin');
    const handleItemClick = (e, { name }) => setActiveItem(name)
    return (
        <Menu size='large'>
            {
                props.isAuthenticated ?
                    <NevigationItem link='/home'>
                        <Menu.Item
                            to={props.link}
                            name='Home'
                            active={activeItem === 'Home'}
                            onClick={handleItemClick}
                        />
                    </NevigationItem>
                    :
                    <NevigationItem link='/signin'>
                        <Menu.Item
                            name='Home'
                            active={activeItem === 'Home'}
                            onClick={handleItemClick}
                        />
                    </NevigationItem>
            }

            <Menu.Menu position='right'>
                {
                    props.isAuthenticated ?
                        <NevigationItem link='/logout'>
                            <Menu.Item
                                name='Sign Out'
                                active={activeItem === 'Sign Out'}
                                onClick={handleItemClick}
                            />
                        </NevigationItem>
                        :
                        <>
                            <NevigationItem link='/signin'>
                                <Menu.Item
                                    to={props.link}
                                    name='Sign In'
                                    active={activeItem === 'Sign In'}
                                    onClick={handleItemClick}
                                />
                            </NevigationItem>
                            <NevigationItem link='/signup'>
                                <Menu.Item
                                    to={props.link}
                                    name='Sign Up'
                                    active={activeItem === 'Sign Up'}
                                    onClick={handleItemClick}
                                />
                            </NevigationItem>
                        </>
                }
            </Menu.Menu>
        </Menu>
    )

}
const mapStateToProps = state => {
    return {
        isAuthenticated: state.reg.token
    }
}

export default connect(mapStateToProps, null)(NevigationItems);

