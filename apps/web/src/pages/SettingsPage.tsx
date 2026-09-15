import PageHeader from '../components/PageHeader'
import Card from '../components/Card'
function SettingsPage() {
  return (
    <main>
      <PageHeader
        title="Settings"
        description="Manage your application preferences and account settings."
      />

      <Card>
        <h2>Application settings</h2>
<p>Configuration options for Orchinova will appear here.</p>
      </Card>
    </main>
  )
}

export default SettingsPage