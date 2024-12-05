import React from "react";

export class ProfileStatus extends React.Component {
  constructor() {
    super();
    this.state = {
      editMode: false,
    };
    this.statusInputRef = React.createRef();
  }

  handleChangeEditMode = (editMode) => {
    if (editMode) {
      this.setState({
        editMode,
      });
    } else {
      this.setState({
        editMode,
      });
      if (this.statusInputRef.current.value !== this.props.status) {
        this.props.handleUpdateStatus(this.statusInputRef.current.value);
      }
    }
  };

  render() {
    return (
      <div>
        {this.state.editMode ? (
          <input
            ref={this.statusInputRef}
            autoFocus
            onBlur={() => {
              this.handleChangeEditMode(false);
            }}
            type="text"
            defaultValue={this.props.status}
          />
        ) : (
          <span
            onDoubleClick={() => {
              this.handleChangeEditMode(true);
            }}
          >
            {this.props.status || "No status"}
          </span>
        )}
      </div>
    );
  }
}
