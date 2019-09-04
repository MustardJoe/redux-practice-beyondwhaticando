import { connect } from 'react-redux';
import Drinks from '../components/Drinks';
import { getDrinks } from '../selectors/lunchSelectors';
import { addDrink } from '../actions/lunchActions';

const mapStateToProps = state => ({
  drinks: getDrinks(state)
});

const mapDispatchToProps = dispatch => ({
  addWater() {
    dispatch(addDrink('water'));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Drinks);

