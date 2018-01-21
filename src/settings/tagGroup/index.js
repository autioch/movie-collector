import React, { Component } from 'react';
import { Tag, Input, Tooltip, Icon } from 'antd';
import settings from 'electron-settings';

const boundMethods = ['handleClose', 'showInput', 'handleInputChange', 'handleInputConfirm', 'saveInputRef'];

export default class TagGroup extends Component {
  constructor(props) {
    super(props);

    boundMethods.forEach((method) => {
      this[method] = this[method].bind(this);
    });
    this.state = {
      tags: settings.get(props.settingsKey, props.defaultValue).sort(),
      inputVisible: false,
      inputValue: ''
    };
  }

  handleClose(removedTag) {
    this.setState({
      tags: this.state.tags.filter((tag) => tag !== removedTag)
    });
  }

  showInput() {
    this.setState({
      inputVisible: true
    }, () => this.input.focus());
  }

  handleInputChange(ev) {
    this.setState({
      inputValue: ev.target.value
    });
  }

  handleInputConfirm() {
    const { inputValue, tags } = this.state;

    this.setState({
      tags: this.state.tags.includes(inputValue) ? tags : tags.concat(inputValue).sort(),
      inputVisible: false,
      inputValue: ''
    });
  }

  saveInputRef(input) {
    this.input = input;
  }

  componentWillUpdate(nextProps, nextState) { // eslint-disable-line no-unused-vars
    settings.set(this.props.settingsKey, nextState.tags);
  }

  render() {
    const { tags, inputVisible, inputValue } = this.state;
    const { label } = this.props;

    return (
      <div>
        <div>Acceptable {label}</div>
        <div>
          {tags.map((tag, index) => {
            const isLongTag = tag.length > 20;
            const tagElem = (
              <Tag key={tag} closable={index !== 0} afterClose={() => this.handleClose(tag)}>
                {isLongTag ? `${tag.slice(0, 20)}...` : tag}
              </Tag>
            );

            return isLongTag ? <Tooltip title={tag} key={tag}>{tagElem}</Tooltip> : tagElem;
          })}
          {inputVisible && (
            <Input
              ref={this.saveInputRef}
              type="text"
              size="small"
              style={{
                width: 78
              }}
              value={inputValue}
              onChange={this.handleInputChange}
              onBlur={this.handleInputConfirm}
              onPressEnter={this.handleInputConfirm}
            />
          )}
          {!inputVisible && (
            <Tag
              onClick={this.showInput}
              style={{
                background: '#fff',
                borderStyle: 'dashed'
              }}
            >
              <Icon type="plus" /> {label}
            </Tag>
          )}
        </div>
      </div>
    );
  }
}
