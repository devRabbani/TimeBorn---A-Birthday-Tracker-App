import styles from './countCard.module.css'

export default function CountCardMain({ person }) {
  //Times
  const sec = 1000
  const min = sec * 60
  const hour = min * 60
  const day = hour * 24
  const month = day * 30.4167

  const monthRemain = Math.floor(person.difference / month)
  const dayRemain = Math.floor((person.difference % month) / day)

  return (
    <div className={styles.card}>
      <span className={styles.numbers}></span>
      {/* <p
        className={styles.countDown}
      >{`${monthRemain} Month , ${dayRemain} Days left`}</p> */}
      <p className={styles.countDown}>
        <span className={styles.numbers}>{monthRemain}</span> Month ,{' '}
        <span className={styles.numbers}>{dayRemain}</span> Days left
      </p>
      <p className={styles.name}>{person.name}</p>
      <p className={styles.birthday}>
        {new Date(person.targetDate).toDateString()}
      </p>
    </div>
  )
}
