import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ActionButton from '~/components/ActionButton';
import GlobalContainer from '~/components/Container';
import GeniusInput from '~/components/GeniusInput';
import GeniusText from '~/components/GeniusText';
import { GreetingsView, IconView, InputView, KeyboardView } from './styles';

const HomeView = ({ nickname, setNickname, handleNewUser, onPress }) => {
  const [isFocused, setIsFocused] = useState(false);

  const { t } = useTranslation();

  const handleOnFocus = () => {
    setIsFocused(true);
  };

  const handleOnBlur = () => {
    setIsFocused(false);
  };

  return (
    <GlobalContainer background="primary">
      <KeyboardView>
        <IconView />
        <GreetingsView>
          <GeniusText
            color="textHeading"
            fontFamily="bold"
            size={32}
            pBottom={16}
            align="center">
            {t('START.WELCOME')}
          </GeniusText>
          <GeniusText color="textHeading" align="center" size={20}>
            {t('START.DESCRIPTION')}
          </GeniusText>
        </GreetingsView>
        <InputView>
          <GeniusInput
            isFocused={isFocused}
            placeholder={t('START.PLACEHOLDER')}
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
            value={nickname}
            onChangeText={setNickname}
            onSubmitEditing={handleNewUser}
          />
        </InputView>
      </KeyboardView>
      <ActionButton
        text={t('START.BUTTON_START')}
        activeOpacity={0.75}
        size={24}
        disabled={!nickname}
        onPress={onPress}
        background={nickname ? 'secondary' : 'textDisabled'}
      />
    </GlobalContainer>
  );
};

export default HomeView;
