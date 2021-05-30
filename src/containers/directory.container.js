import { connect } from "react-redux"
import { DirectoryMenu } from "../components/directory/directoryMenu.component"

const mapStateToProps = (state) => {
    return {
        sections: state.directory
    }
}

export default connect(mapStateToProps)(DirectoryMenu)