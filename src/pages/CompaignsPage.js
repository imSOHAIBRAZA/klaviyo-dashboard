
import Page from 'components/Page';
import React from 'react';
import { getColor } from 'utils/colors';




class CompaignsPage extends React.Component {
  componentDidMount() {
    // this is needed, because InfiniteCalendar forces window scroll
    window.scrollTo(0, 0);
  }

  render() {
    const primaryColor = getColor('primary');
    const secondaryColor = getColor('secondary');

    return (
      <Page
        className="DashboardPage"
        title="Compaigns"
        breadcrumbs={[{ name: 'Compaigns', active: true }]}
      >
       Compaigns Page 
      </Page>
    );
  }
}
export default CompaignsPage;
