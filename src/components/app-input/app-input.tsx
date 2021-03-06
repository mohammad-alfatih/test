import { Component, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'app-input',
  styleUrl: 'app-input.scss',
})
export class AppInput {
  @Prop() name: string;
  @Prop() type: string;
  @Prop() label: string;
  @Prop() placeholder: string;
  @Prop() id: string;
  @Prop() maxlength: string;
  @Prop() required = false;
  @Event() valueChange: EventEmitter;

  inputHandler(event) {
    this.valueChange.emit({
      field: this.name,
      value: event.target.value,
      target: event.target,
    });
  }

  render() {
    return (
      <div class="form-group">
        <label htmlFor={this.name}>{this.label}</label>
        <input
          class="form-control"
          type={this.type}
          name={this.name}
          id={this.id}
          maxlength={this.maxlength}
          required={this.required}
          onInput={this.inputHandler.bind(this)}
        />
      </div>
    );
  }
}
