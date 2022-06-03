import React from 'react'

import styles from 'styles/Product.module.css'
import IPFSDownload from './ipfs-download'

export default function Product({ product }) {
  const { id, name, price, description, image_url } = product

  return (
    <div className={styles.product_container}>
      <div>
        <img className={styles.product_image} src={image_url} alt={name} />
      </div>

      <div className={styles.product_details}>
        <div className={styles.product_text}>
          <div className={styles.product_title}>{name}</div>
          <div className={styles.product_description}>{description}</div>
        </div>

        <div className={styles.product_action}>
          <div className={styles.product_price}>{price} USDC</div>
          <IPFSDownload
            filename="og-emoji.png"
            hash="QmcrVpuCDjgfDmGjUTpw9tMTu7hyMWAv7kAm9kiLkYMya8"
            cta="Download emojis"
          />
        </div>
      </div>
    </div>
  )
}