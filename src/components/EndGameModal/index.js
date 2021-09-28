import React from 'react';
import { Modal } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import ActionButton from '../ActionButton';
import GeniusText from '../GeniusText';
import { Container, ContentView, ButtonWrapper, CongratsView } from './styles';

const EndGameModal = ({
  restartGame,
  moves,
  modalVisible,
  setModalVisible,
}) => {
  const { t } = useTranslation();
  const navigation = useNavigation();

  const handleBackToHome = () => {
    restartGame();
    navigation.goBack();
  };

  return (
    <Modal
      animationType="slide"
      transparent
      statusBarTranslucent
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}>
      <Container background="opacity">
        <ContentView>
          <CongratsView>
            <LottieView
              loop
              autoPlay
              source={require('~/animations/congrats.json')}
              style={{
                width: 280,
                height: 280,
              }}
            />
            <GeniusText
              size={28}
              color="textHeading"
              align="center"
              fontFamily="bold"
              pBottom={24}>
              {t('MODAL.CONGRATS', { moves })}
            </GeniusText>
          </CongratsView>
          <ButtonWrapper>
            <ActionButton
              text={t('MODAL.BUTTON_RESTART')}
              size={22}
              mBottom={18}
              onPress={restartGame}
              background="secondary"
            />
            <ActionButton
              width={80}
              size={18}
              text={t('MODAL.BUTTON_GO_HOME')}
              onPress={handleBackToHome}
              background="attention"
            />
          </ButtonWrapper>
        </ContentView>
      </Container>
    </Modal>
  );
};

export default EndGameModal;
