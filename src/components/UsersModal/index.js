import React, { useContext, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Modalize } from 'react-native-modalize';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from 'styled-components';
import GeniusText from '../GeniusText';
import GeniusInput from '../GeniusInput';
import ActionButton from '../ActionButton';
import UserCard from '../UserCard';
import { addNewUser, pickUser } from '~/store/reducers/user';
import { ContentView, HeaderView } from './styles';

const UsersModal = ({ modalRef }) => {
  const { currentUser, users } = useSelector((state) => state.user);
  const [nickname, setNickname] = useState('');
  const themeContext = useContext(ThemeContext);
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const handleNewUser = () => {
    if (!currentUser) return;

    dispatch(addNewUser({ user: nickname }));
    setNickname('');
  };

  const handleSelectUser = (user) => {
    dispatch(pickUser(user));
    modalRef.current?.close();
  };

  return (
    <Modalize
      ref={modalRef}
      modalStyle={{
        backgroundColor: themeContext.colors.primary,
      }}
      HeaderComponent={
        <HeaderView>
          <GeniusText pBottom={8}>Você está jogando como: </GeniusText>
          <GeniusText fontFamily="bold" size={24} pBottom={16}>
            {currentUser.user}
          </GeniusText>
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
        </HeaderView>
      }>
      <ContentView>
        <GeniusText pBottom={8}>{t('HOME.SELECT_USER')}</GeniusText>
        {users.map((item) => {
          return (
            <UserCard
              key={item.id}
              user={item.user}
              onPress={() => handleSelectUser(item)}
            />
          );
        })}
      </ContentView>
    </Modalize>
  );
};

export default UsersModal;
