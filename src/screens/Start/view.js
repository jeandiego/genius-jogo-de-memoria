import React, { useState } from 'react';
import ActionButton from '~/components/ActionButton';
import GeniusInput from '~/components/GeniusInput';
import GeniusText from '~/components/GeniusText';
import {
  Container,
  GreetingsView,
  IconView,
  InputView,
  KeyboardView,
} from './styles';

const HomeView = ({ onPress }) => {
  const [isFocused, setIsFocused] = useState(false);

  function handleOnFocus() {
    setIsFocused(true);
  }

  function handleOnBlur() {
    setIsFocused(false);
  }

  return (
    <Container>
      <KeyboardView>
        <IconView />
        <GreetingsView>
          <GeniusText
            color="white"
            fontFamily="bold"
            size={28}
            pBottom={16}
            align="center">
            Bem vindo ao Genius
          </GeniusText>
          <GeniusText color="white" align="center" size={18}>
            Bora testar a sua memória neste jogo? Digite seu nome e desce o
            Play!
          </GeniusText>
        </GreetingsView>
        <InputView>
          <GeniusInput
            isFocused={isFocused}
            placeholder="Digite seu nome..."
            onFocus={() => handleOnFocus()}
            onBlur={() => handleOnBlur()}
            // onChangeText={}
          />
        </InputView>
      </KeyboardView>
      <ActionButton
        text="Começar a jogar"
        activeOpacity={0.75}
        onPress={onPress}
      />
    </Container>
  );
};

export default HomeView;
