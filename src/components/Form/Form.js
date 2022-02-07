//Styles
import './Form.scss'

export default function Form({user, onSubmit, onChange}) {
  return (
    <form onSubmit={onSubmit}>
      <label>
        First name
        <input
          type="text"
          name="first_name"
          value={user.first_name}
          onChange={onChange}
          required
          maxLength="256"
        />
      </label>
      <label>
        Last name
        <input
          type="text"
          name="last_name"
          value={user.last_name}
          onChange={onChange}
          required
          maxLength="256"
        />
      </label>
      <label>
        Birth date
        <input
          type="date"
          name="birth_date"
          value={user.birth_date}
          onChange={onChange}
          required
        />
      </label>
      <label>
        Gender
        <select
          name="gender"
          value={user.gender}
          onChange={onChange}
          required
        >
          <option value="male">male</option>
          <option value="female">female</option>
        </select>
      </label>
      <label>
        Job
        <input
          type="text"
          name="job"
          value={user.job}
          onChange={onChange}
          required
          maxLength="256"
        />
      </label>
      <label>
        Biography
        <textarea
          name="biography"
          value={user.biography}
          onChange={onChange}
          required
          maxLength="1024"
        />
      </label>
      <label className="checkbox">
        Enabled
        <input
          type="checkbox"
          name="is_active"
          checked={user.is_active}
          onChange={onChange}
          required
        />
      </label>
      <button type="submit">Save</button>
    </form>
  )
}