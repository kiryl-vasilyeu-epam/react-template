import React, { Component } from 'react';
import NumberedText from '../Components/NumberedText/NumberedText';
import Header from '../Components/Header/Header';
import Modal from '../Components/Modal/Modal';

const numberedData = [{
  title: 'Скачайте приложение в App Store или Google Play. Зарегистрируйтесь, чтобы отслеживать прогресс ребёнка',
  color: '#3477FA',
  backgroundColor: '#F1F7FE',
}, {
  title: 'Загрузите голосовой сэмпл ребёнка (и его проблемной речи)',
  color: '#A747FB',
  backgroundColor: '#F7EEFF',
}, {
  title: 'Программа подберет уникальные упражнения, направленные на исправление речи ребёнка, а также порекомендует расписание для ежедневных занятий',
  color: '#FA624E',
  backgroundColor: '#FEF0EE',
}];

export default class Main extends Component {
  state = {
    toggleModal: () => null,
  };

  setToggleModal = (toggleModal) => {
    this.setState({ toggleModal });
  };

  renderNumberedText() {
    return numberedData.map(({ title, color, backgroundColor }, index) => (
      <NumberedText
        key={title}
        title={title}
        number={index + 1}
        color={color}
        backgroundColor={backgroundColor}
      />
    ));
  }

  render() {
    const { toggleModal } = this.state;

    return (
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
      >
        <Header toggleModal={toggleModal} />
        <Modal setToggleModal={this.setToggleModal} />
        {this.renderNumberedText()}
      </div>
    );
  }
}
