import React,{Component} from 'react';



 
class Upload extends Component {
  
    state = {
      // Initially, no file is selected
      selectedFile: null,
      type:null
    };
    
    // On file select (from the pop up)
    onFileChange = event => {
        console.log(event.target.files[0].type, 'event');
        // Update the state
        this.setState({ 
          selectedFile: URL.createObjectURL(event.target.files[0]), 
          type:event.target.files[0].type
        });

        this.props.imageSrc = this.state.selectedFile
        console.log(this.props.selectedFile, "props")
    };

                        /*
                           <label className="upload" htmlFor="file">
                          <i className="far fa-images"></i>
                         <input className="fileUpload" type="file" name="file" onChange={this.onFileChange} />
                    </label>


                    
                <div>
                  <img src={this.state.selectedFile} alt="img"/>
              </div>
                    */
    
    render() {
    
      return (
                    <div class="file-upload">
                      <i className="far fa-images"></i>
                      <input type="file" name="name" onChange={this.onFileChange}/>
                    </div>
      );
    }
}

 
  export default Upload;