import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { Modalize } from 'react-native-modalize';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from 'styled-components';
import { ContentView, HeaderView, FooterView } from './styles';
import GeniusText from '../GeniusText';
import GeniusInput from '../GeniusInput';
import ActionButton from '../ActionButton';
import UserCard from '../UserCard';

// import { Container } from './styles';

const UsersModal = ({ modalRef, nickname, setNickname, handleNewUser }) => {
  const { currentUser, users } = useSelector((state) => state.user);
  const themeContext = useContext(ThemeContext);
  const { t } = useTranslation();

  return (
    <Modalize
      ref={modalRef}
      modalStyle={{
        backgroundColor: themeContext.colors.primary_dark,
      }}
      HeaderComponent={
        <HeaderView>
          <GeniusText pBottom={8}>Você está jogando como: </GeniusText>
          <GeniusText fontFamily="bold" size={24}>
            {currentUser.user}
          </GeniusText>
        </HeaderView>
      }>
      <ContentView>
        <GeniusText pBottom={8}>{t('HOME.SELECT_USER')}</GeniusText>
        {users.map((item) => {
          return <UserCard key={item} user={item.user} />;
        })}
      </ContentView>
      <FooterView>
        <GeniusInput
          placeholder={t('HOME.PLACEHOLDER')}
          value={nickname}
          onChangeText={setNickname}
          onSubmitEditing={handleNewUser}
        />
        <ActionButton
          text={t('HOME.BUTTON_NEW_USER')}
          mTop={16}
          activeOpacity={0.75}
          size={18}
          disabled={!nickname}
          onPress={handleNewUser}
          background={nickname ? 'success' : 'textDisabled'}
        />
      </FooterView>
    </Modalize>
  );
};

export default UsersModal;
