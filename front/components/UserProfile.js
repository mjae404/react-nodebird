import React, { useCallback } from 'react';
import { Card, Avatar, Button } from 'antd';

const UserProfile = ({ setIsLoggedIn }) => {
    const onLogOut = useCallback(()=>{
        setIsLoggedIn(false);
    }, []);
    return (
        <Card actions={[
            <div key="twit">짹짹<br/>0</div>,
            <div key="following">팔로잉<br/>0</div>,
            <div key="follower">팔로워<br/>0</div>
        ]}>
            <Card.Meta avatar={<Avatar>MJ</Avatar>} title="mjae" />
            <Button onClick={onLogOut}>로그아웃</Button>
        </Card>
    );
}

export default UserProfile;