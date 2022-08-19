import React from 'react';
import Header from '../components/Header/Header';
import NumberedText from '../components/NumberedText/NumberedText';
import Modal from '../components/Modal/Modal';
import SelfModal from '../components/SelfModal/SelfModal';
import CounterButton from '../components/CounterButton/CounterButton';
import Input from '../components/Input/Input';

const TEXT_DATA = [
  { text: 'first text', color: '#3477FA', backgroundColor: '#F1F7FE' },
  { text: 'second', color: '#A747FB', backgroundColor: '#F7EEFF' },
  { text: 'third text', color: '#FA624E', backgroundColor: '#FEF0EE' },
];

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalShown: false,
      showModal: () => null,
    };
  }

  toggleModal = () => {
    this.setState((prevState) => ({
      isModalShown: !prevState.isModalShown,
    }));
  };

  setShowModal = (showModal) => {
    this.setState({
      showModal,
    });
  };

  renderNumberedText() {
    return (
      TEXT_DATA.map((item, index) => (
        <NumberedText
          key={item.text}
          text={item.text}
          number={index + 1}
          color={item.color}
          backgroundColor={item.backgroundColor}
        />
      ))
    );
  }

  render() {
    const { isModalShown, showModal } = this.state;

    return (
      <div
        style={{
          position: 'relative',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          flex: 1,
        }}
      >
        <Header onSignInPress={this.toggleModal} onSignUpPress={showModal} />
        App page
        {this.renderNumberedText()}
        <CounterButton />

        {isModalShown && <Modal closeModal={this.toggleModal} />}

        <SelfModal setShowModal={this.setShowModal} />

        <Input />

      </div>
    );
  }
}

export default Main;
