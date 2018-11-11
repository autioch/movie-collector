import React, { Component } from 'react';
import SuggestionMask from './mask';
import getDiff from './getDiff';
import './styles.css';
import { Button } from 'antd';

export default class Suggestion extends Component {
  constructor(props, ...args) {
    super(props, ...args);
    this.state = this.calculateChange(props.suggestion, props.ignoreCamelCase);
  }

  componentWillReceiveProps(nextProps) {
    const { suggestion, ignoreCamelCase } = this.state;

    if (suggestion !== nextProps.suggestion || ignoreCamelCase !== nextProps.ignoreCamelCase) {
      this.setState(this.calculateChange(nextProps.suggestion, nextProps.ignoreCamelCase));
    }
  }

  calculateChange(suggestion, ignoreCamelCase) {
    const { original } = this.props;
    const diff = getDiff(original, suggestion, this.props.itemId, ignoreCamelCase);

    return {
      suggestion,
      isDifferent: suggestion !== original,
      diff,
      ignoreCamelCase
    };
  }

  startChange(ev) {
    const suggestion = ev.target.value;
    const { ignoreCamelCase } = this.props;

    this.setState(this.calculateChange(suggestion, ignoreCamelCase), () => this.propagateChange(suggestion));
  }

  propagateChange(suggestion) {
    this.props.onChange({
      itemId: this.props.itemId,
      suggestion
    });
  }

  applySuggestion() {
    this.props.renameFile(this.props.itemId);
  }

  render() {
    const { isDifferent } = this.state;

    return (
      <div className="item-suggestion">
        <input
          className={`item-suggestion-input${isDifferent ? ' is-different' : ''}`}
          type="text"
          value={this.state.suggestion}
          onChange={(ev) => this.startChange(ev)}
        />
        <div
          className={`item-suggestion-apply${isDifferent ? '' : ' is-disabled'}`}
          onClick={() => this.applySuggestion()}
        >
          Rename
        </div>
        <SuggestionMask diff={this.state.diff} />
      </div>
    );
  }
}
