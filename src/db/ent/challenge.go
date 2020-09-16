// Code generated by entc, DO NOT EDIT.

package ent

import (
	"fmt"
	"strings"
	"time"

	"github.com/facebook/ent/dialect/sql"
	"github.com/roleypoly/roleypoly/src/db/ent/challenge"
)

// Challenge is the model entity for the Challenge schema.
type Challenge struct {
	config `json:"-"`
	// ID of the ent.
	ID int `json:"id,omitempty"`
	// CreateTime holds the value of the "create_time" field.
	CreateTime time.Time `json:"create_time,omitempty"`
	// UpdateTime holds the value of the "update_time" field.
	UpdateTime time.Time `json:"update_time,omitempty"`
	// ChallengeID holds the value of the "challenge_id" field.
	ChallengeID string `json:"challenge_id,omitempty"`
	// UserID holds the value of the "user_id" field.
	UserID string `json:"user_id,omitempty"`
	// Human holds the value of the "human" field.
	Human string `json:"human,omitempty"`
	// Magic holds the value of the "magic" field.
	Magic string `json:"magic,omitempty"`
	// ExpiresAt holds the value of the "expires_at" field.
	ExpiresAt time.Time `json:"expires_at,omitempty"`
}

// scanValues returns the types for scanning values from sql.Rows.
func (*Challenge) scanValues() []interface{} {
	return []interface{}{
		&sql.NullInt64{},  // id
		&sql.NullTime{},   // create_time
		&sql.NullTime{},   // update_time
		&sql.NullString{}, // challenge_id
		&sql.NullString{}, // user_id
		&sql.NullString{}, // human
		&sql.NullString{}, // magic
		&sql.NullTime{},   // expires_at
	}
}

// assignValues assigns the values that were returned from sql.Rows (after scanning)
// to the Challenge fields.
func (c *Challenge) assignValues(values ...interface{}) error {
	if m, n := len(values), len(challenge.Columns); m < n {
		return fmt.Errorf("mismatch number of scan values: %d != %d", m, n)
	}
	value, ok := values[0].(*sql.NullInt64)
	if !ok {
		return fmt.Errorf("unexpected type %T for field id", value)
	}
	c.ID = int(value.Int64)
	values = values[1:]
	if value, ok := values[0].(*sql.NullTime); !ok {
		return fmt.Errorf("unexpected type %T for field create_time", values[0])
	} else if value.Valid {
		c.CreateTime = value.Time
	}
	if value, ok := values[1].(*sql.NullTime); !ok {
		return fmt.Errorf("unexpected type %T for field update_time", values[1])
	} else if value.Valid {
		c.UpdateTime = value.Time
	}
	if value, ok := values[2].(*sql.NullString); !ok {
		return fmt.Errorf("unexpected type %T for field challenge_id", values[2])
	} else if value.Valid {
		c.ChallengeID = value.String
	}
	if value, ok := values[3].(*sql.NullString); !ok {
		return fmt.Errorf("unexpected type %T for field user_id", values[3])
	} else if value.Valid {
		c.UserID = value.String
	}
	if value, ok := values[4].(*sql.NullString); !ok {
		return fmt.Errorf("unexpected type %T for field human", values[4])
	} else if value.Valid {
		c.Human = value.String
	}
	if value, ok := values[5].(*sql.NullString); !ok {
		return fmt.Errorf("unexpected type %T for field magic", values[5])
	} else if value.Valid {
		c.Magic = value.String
	}
	if value, ok := values[6].(*sql.NullTime); !ok {
		return fmt.Errorf("unexpected type %T for field expires_at", values[6])
	} else if value.Valid {
		c.ExpiresAt = value.Time
	}
	return nil
}

// Update returns a builder for updating this Challenge.
// Note that, you need to call Challenge.Unwrap() before calling this method, if this Challenge
// was returned from a transaction, and the transaction was committed or rolled back.
func (c *Challenge) Update() *ChallengeUpdateOne {
	return (&ChallengeClient{config: c.config}).UpdateOne(c)
}

// Unwrap unwraps the entity that was returned from a transaction after it was closed,
// so that all next queries will be executed through the driver which created the transaction.
func (c *Challenge) Unwrap() *Challenge {
	tx, ok := c.config.driver.(*txDriver)
	if !ok {
		panic("ent: Challenge is not a transactional entity")
	}
	c.config.driver = tx.drv
	return c
}

// String implements the fmt.Stringer.
func (c *Challenge) String() string {
	var builder strings.Builder
	builder.WriteString("Challenge(")
	builder.WriteString(fmt.Sprintf("id=%v", c.ID))
	builder.WriteString(", create_time=")
	builder.WriteString(c.CreateTime.Format(time.ANSIC))
	builder.WriteString(", update_time=")
	builder.WriteString(c.UpdateTime.Format(time.ANSIC))
	builder.WriteString(", challenge_id=")
	builder.WriteString(c.ChallengeID)
	builder.WriteString(", user_id=")
	builder.WriteString(c.UserID)
	builder.WriteString(", human=")
	builder.WriteString(c.Human)
	builder.WriteString(", magic=")
	builder.WriteString(c.Magic)
	builder.WriteString(", expires_at=")
	builder.WriteString(c.ExpiresAt.Format(time.ANSIC))
	builder.WriteByte(')')
	return builder.String()
}

// Challenges is a parsable slice of Challenge.
type Challenges []*Challenge

func (c Challenges) config(cfg config) {
	for _i := range c {
		c[_i].config = cfg
	}
}
