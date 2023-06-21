import { useState } from 'react';
import { styled, ThemeProvider } from 'styled-components';

const theme = {
  primary: {
    red: 'hsl(1, 90%, 64%)',
    blue: 'hsl(219, 85%, 26%)',
  },
  neutral: {
    white: 'hsl(0, 0%, 100%)',
    very_light_grayish_blue: 'hsl(210, 60%, 98%)',
    light_grayish_blue_1: 'hsl(211, 68%, 94%)',
    light_grayish_blue_2: 'hsl(205, 33%, 90%)',
    grayish_blue: 'hsl(219, 14%, 63%)',
    dark_grayish_blue: 'hsl(219, 12%, 42%)',
    very_dark_blue: 'hsl(224, 21%, 14%)',
  }
}

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 30px 0;
`

const Title = styled.h1`
  font-size: 1.5em;
  color: ${props => props.theme.neutral.very_dark_blue};
  font-weight: 800;
`

const TitleCounter = styled.span`
  background-color: ${props => props.theme.primary.blue};
  color: ${props => props.theme.neutral.white};
  padding: 0 8px;
  font-size: 1rem;
  margin-left: 0.5rem;
  border-radius: 5px;
  user-select: none;
`

const MarkAll = styled.div`
  color: ${props => props.theme.neutral.dark_grayish_blue};
  cursor: pointer;
  user-select: none;
  font-weight: 500;
  &:hover {
    color: ${props => props.theme.primary.blue};
  } 
`

const Body = styled.main`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
`

const StyledNotification = styled.div<{ $read?: boolean, $hasImage?: boolean }>`
  background-color: ${props => props.$read ? props.theme.neutral.white : props.theme.neutral.very_light_grayish_blue };
  display: grid;
  grid-template-rows: min-content;
  grid-template-columns: min-content 1fr ${props => props.$hasImage ? 'min-content' : ''};
  gap: 20px;
  padding: 15px;
  border-radius: 5px;
`

const NotificationAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
`

const NotificationName = styled.span`
  color: ${props => props.theme.neutral.very_dark_blue};
  font-weight: 800;
  cursor: pointer;
  &:hover {
    color: ${props => props.theme.primary.blue};
  }
`

const NotificationTitle = styled.div<{ $read?: boolean }>`
  color: ${props => props.theme.neutral.dark_grayish_blue};
  &::after {
    content: "";
    display: ${props => props.$read ? 'none' : 'inline-block'};
    width: 10px;
    height: 10px;
    background-color: ${props => props.theme.primary.red};
    border-radius: 50%;
    margin-left: 5px;
  }
`

const NotificationLink = styled.a<{ $isGroup?: boolean }>`
  color: ${props => props.$isGroup ? props.theme.primary.blue : props.theme.neutral.dark_grayish_blue};
  font-weight: 800;
  cursor: pointer;
  &:hover {
    color: ${props => props.theme.primary.blue}; 
  }
`

const NotificationBody = styled.div`
  display: flex;
  flex-direction: column;
`

const NotificationTimestamp = styled.div`
  font-size: 1rem;
  color: ${props => props.theme.neutral.grayish_blue}
`

const NotificationMessage = styled.div`
  border: 1px solid ${props => props.theme.neutral.light_grayish_blue_2};
  padding: 15px;
  color: ${props => props.theme.neutral.dark_grayish_blue};
  border-radius: 5px;
  margin: 10px 0;
  cursor: pointer;
  &:hover {
    background-color: ${props => props.theme.neutral.light_grayish_blue_1}
  }
`

const NotificationImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 5px;
  cursor: pointer;
`

const NotificationsContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.neutral.white};
  padding: 0 30px;
  max-width: 650px;
  border-radius: 15px;
  @media(max-width: 375px) {
    max-width: none;
    padding: 0 15px;
    font-size: 0.9rem;
  }
`

interface NotificationProps {
  read: boolean,
  message: {
    body: string,
    actionTo?: string,
    image?: string,
    isGroup?: boolean,
  },
  user: {
    name: string,
    image: string,
  },
  timestamp: string,
  body?: string,
}

function Notifications() {
  const [notifications, setNotifications] = useState<NotificationProps[]>([
    { 
      read: false,
      user: { name: "Mark Webber", image: "/assets/images/avatar-mark-webber.webp"},
      message: { body: "reacted to your recent post", actionTo:  "My first tournament today!"},
      timestamp: "1m ago",
    },
    {
      read: false,
      user: { name: "Angela Gray", image: "/assets/images/avatar-angela-gray.webp"},
      message: { body: "followed you" },
      timestamp: "5m ago",
    },
    {
      read: false,
      user: { name: "Jacob Thompson", image: "/assets/images/avatar-jacob-thompson.webp" },
      message: { body: "has joined your group", actionTo: "Chess Club", isGroup: true },
      timestamp: "1 day ago",
    },
    {
      read: true,
      user: { name: "Rizky Hasanuddin", image: "/assets/images/avatar-rizky-hasanuddin.webp" },
      message: { body: "sent you a private message" },
      timestamp: "5 days ago",
      body: "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game."
    },
    {
      read: true,
      user: { name: "Kimberly Smith", image: "/assets/images/avatar-kimberly-smith.webp" },
      message: { body: "commented on your picture", image: '/assets/images/image-chess.webp' },
      timestamp: "1 week ago",
    },
    {
      read: true,
      user: { name: "Nathan Peterson", image: "/assets/images/avatar-nathan-peterson.webp" },
      message: { body: "reacted to your recent", actionTo: "post 5 end-game strategies to increase your win rate" },
      timestamp: "2 weeks ago"
    },
    {
      read: true,
      user: { name: "Anna Kim", image: "/assets/images/avatar-anna-kim.webp" },
      message: { body: "left the group", actionTo: "Chess Club", isGroup: true },
      timestamp: "2 weeks ago"
    }
  ])

  const handleReadAll = () => {
    const updatedNotifications = notifications.map((notification) => ({ ...notification, read: true }));
    setNotifications(updatedNotifications);
  }

  return (
    <ThemeProvider theme={theme}>
        <NotificationsContainer>
          <Header>
            <Title> 
              Notifications 
              <TitleCounter>
                {notifications.filter((notification) => !notification.read).length}
              </TitleCounter>
            </Title>
            <MarkAll onClick={handleReadAll}> Mark all as read </MarkAll>
          </Header>
          <Body>
            {notifications.map((notification, index) => {
              return (
                <Notification key={index} notification={notification} />
              );
            })}
          </Body>
        </NotificationsContainer>
    </ThemeProvider>
 )
}

const Notification = ({ notification }: { notification: NotificationProps }) => {
  return (
    <StyledNotification $hasImage={notification.message.image ? true : false} $read={notification.read}>
      <NotificationAvatar src={notification.user.image} />
      <NotificationBody>
        <NotificationTitle $read={notification.read}>
          <NotificationName>{notification.user.name}</NotificationName>
          {' '}
          {notification.message.body}
          {' '}
          <NotificationLink $isGroup={notification.message.isGroup} >{notification.message.actionTo}</NotificationLink>
        </NotificationTitle>
        <NotificationTimestamp>
          {notification.timestamp}
        </NotificationTimestamp>
        {notification.body && 
          <NotificationMessage>
            {notification.body}
          </NotificationMessage>
        }
      </NotificationBody>
      {notification.message.image &&
        <NotificationImage src={notification.message.image} />
      }
    </StyledNotification>
  )
}

export default Notifications;
