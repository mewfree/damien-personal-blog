import React from "react";
import jsonp from "jsonp";
import queryString from "query-string";

export default class MailchimpForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: "",
      success: false,
      successMessage: "",
      error: false,
      errorMessage: "",
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({email: event.target.value});
  }

  handleSubmit(event) {
    const formData = {
      "u": "953d88edfeac49e5ff8f55651",
      "id": "b086d70590",
      "EMAIL": this.state.email
    };
    const url = `//gmail.us3.list-manage.com/subscribe/post-json?${queryString.stringify(formData)}`;

    jsonp(url, { param: "c" }, (err, data) => {
      console.log(data);
      if (data["result"] == "success") {
        this.setState({
          success: true,
          successMessage: data["msg"],
          error: false,
        })
      } else if (data["result"] == "error") {
        this.setState({
          error: true,
          errorMessage: data["msg"],
          success: false,
        })
      } else {
        this.setState({
          error: true,
          errorMessage: "An unknown error happened.",
          success: false,
        })
      }
    });

    event.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label className="text-3xl font-bold" htmlFor="email">
          Subscribe to my newsletter
        </label>
        <div className="flex flex-col md:flex-row mt-2">
          <input className="w-full border border-gray-900 dark:border-indigo-400 rounded bg-white dark:bg-indigo-100 text-black focus:border-gray-600 focus:outline-none text-center md:text-left p-2 mb-2 md:mb-0 md:mr-2" id="email" type="email" placeholder="email@company.com" value={this.state.email} onChange={this.handleChange} required />
          <input className="rounded bg-indigo-600 hover:bg-indigo-800 focus:outline-none cursor-pointer text-white font-bold p-2" type="submit" value="Subscribe" />
        </div>
        <div className={this.state.success ? "text-green-700" : "hidden"}>
          {this.state.successMessage}
        </div>
        <div className={this.state.error ? "text-red-700" : "hidden"}>
          {this.state.errorMessage}
        </div>
      </form>
    )
  }
}
