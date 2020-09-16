// Code generated by entc, DO NOT EDIT.

package ent

import (
	"context"
	"errors"
	"fmt"
	"time"

	"github.com/facebook/ent/dialect/sql/sqlgraph"
	"github.com/facebook/ent/schema/field"
	"github.com/roleypoly/roleypoly/src/db/ent/guild"
	"github.com/roleypoly/roleypoly/src/db/ent/schema"
)

// GuildCreate is the builder for creating a Guild entity.
type GuildCreate struct {
	config
	mutation *GuildMutation
	hooks    []Hook
}

// SetCreateTime sets the create_time field.
func (gc *GuildCreate) SetCreateTime(t time.Time) *GuildCreate {
	gc.mutation.SetCreateTime(t)
	return gc
}

// SetNillableCreateTime sets the create_time field if the given value is not nil.
func (gc *GuildCreate) SetNillableCreateTime(t *time.Time) *GuildCreate {
	if t != nil {
		gc.SetCreateTime(*t)
	}
	return gc
}

// SetUpdateTime sets the update_time field.
func (gc *GuildCreate) SetUpdateTime(t time.Time) *GuildCreate {
	gc.mutation.SetUpdateTime(t)
	return gc
}

// SetNillableUpdateTime sets the update_time field if the given value is not nil.
func (gc *GuildCreate) SetNillableUpdateTime(t *time.Time) *GuildCreate {
	if t != nil {
		gc.SetUpdateTime(*t)
	}
	return gc
}

// SetSnowflake sets the snowflake field.
func (gc *GuildCreate) SetSnowflake(s string) *GuildCreate {
	gc.mutation.SetSnowflake(s)
	return gc
}

// SetMessage sets the message field.
func (gc *GuildCreate) SetMessage(s string) *GuildCreate {
	gc.mutation.SetMessage(s)
	return gc
}

// SetCategories sets the categories field.
func (gc *GuildCreate) SetCategories(s []schema.Category) *GuildCreate {
	gc.mutation.SetCategories(s)
	return gc
}

// SetEntitlements sets the entitlements field.
func (gc *GuildCreate) SetEntitlements(s []string) *GuildCreate {
	gc.mutation.SetEntitlements(s)
	return gc
}

// Mutation returns the GuildMutation object of the builder.
func (gc *GuildCreate) Mutation() *GuildMutation {
	return gc.mutation
}

// Save creates the Guild in the database.
func (gc *GuildCreate) Save(ctx context.Context) (*Guild, error) {
	if err := gc.preSave(); err != nil {
		return nil, err
	}
	var (
		err  error
		node *Guild
	)
	if len(gc.hooks) == 0 {
		node, err = gc.sqlSave(ctx)
	} else {
		var mut Mutator = MutateFunc(func(ctx context.Context, m Mutation) (Value, error) {
			mutation, ok := m.(*GuildMutation)
			if !ok {
				return nil, fmt.Errorf("unexpected mutation type %T", m)
			}
			gc.mutation = mutation
			node, err = gc.sqlSave(ctx)
			mutation.done = true
			return node, err
		})
		for i := len(gc.hooks) - 1; i >= 0; i-- {
			mut = gc.hooks[i](mut)
		}
		if _, err := mut.Mutate(ctx, gc.mutation); err != nil {
			return nil, err
		}
	}
	return node, err
}

// SaveX calls Save and panics if Save returns an error.
func (gc *GuildCreate) SaveX(ctx context.Context) *Guild {
	v, err := gc.Save(ctx)
	if err != nil {
		panic(err)
	}
	return v
}

func (gc *GuildCreate) preSave() error {
	if _, ok := gc.mutation.CreateTime(); !ok {
		v := guild.DefaultCreateTime()
		gc.mutation.SetCreateTime(v)
	}
	if _, ok := gc.mutation.UpdateTime(); !ok {
		v := guild.DefaultUpdateTime()
		gc.mutation.SetUpdateTime(v)
	}
	if _, ok := gc.mutation.Snowflake(); !ok {
		return &ValidationError{Name: "snowflake", err: errors.New("ent: missing required field \"snowflake\"")}
	}
	if _, ok := gc.mutation.Message(); !ok {
		return &ValidationError{Name: "message", err: errors.New("ent: missing required field \"message\"")}
	}
	if _, ok := gc.mutation.Categories(); !ok {
		return &ValidationError{Name: "categories", err: errors.New("ent: missing required field \"categories\"")}
	}
	if _, ok := gc.mutation.Entitlements(); !ok {
		return &ValidationError{Name: "entitlements", err: errors.New("ent: missing required field \"entitlements\"")}
	}
	return nil
}

func (gc *GuildCreate) sqlSave(ctx context.Context) (*Guild, error) {
	gu, _spec := gc.createSpec()
	if err := sqlgraph.CreateNode(ctx, gc.driver, _spec); err != nil {
		if cerr, ok := isSQLConstraintError(err); ok {
			err = cerr
		}
		return nil, err
	}
	id := _spec.ID.Value.(int64)
	gu.ID = int(id)
	return gu, nil
}

func (gc *GuildCreate) createSpec() (*Guild, *sqlgraph.CreateSpec) {
	var (
		gu    = &Guild{config: gc.config}
		_spec = &sqlgraph.CreateSpec{
			Table: guild.Table,
			ID: &sqlgraph.FieldSpec{
				Type:   field.TypeInt,
				Column: guild.FieldID,
			},
		}
	)
	if value, ok := gc.mutation.CreateTime(); ok {
		_spec.Fields = append(_spec.Fields, &sqlgraph.FieldSpec{
			Type:   field.TypeTime,
			Value:  value,
			Column: guild.FieldCreateTime,
		})
		gu.CreateTime = value
	}
	if value, ok := gc.mutation.UpdateTime(); ok {
		_spec.Fields = append(_spec.Fields, &sqlgraph.FieldSpec{
			Type:   field.TypeTime,
			Value:  value,
			Column: guild.FieldUpdateTime,
		})
		gu.UpdateTime = value
	}
	if value, ok := gc.mutation.Snowflake(); ok {
		_spec.Fields = append(_spec.Fields, &sqlgraph.FieldSpec{
			Type:   field.TypeString,
			Value:  value,
			Column: guild.FieldSnowflake,
		})
		gu.Snowflake = value
	}
	if value, ok := gc.mutation.Message(); ok {
		_spec.Fields = append(_spec.Fields, &sqlgraph.FieldSpec{
			Type:   field.TypeString,
			Value:  value,
			Column: guild.FieldMessage,
		})
		gu.Message = value
	}
	if value, ok := gc.mutation.Categories(); ok {
		_spec.Fields = append(_spec.Fields, &sqlgraph.FieldSpec{
			Type:   field.TypeJSON,
			Value:  value,
			Column: guild.FieldCategories,
		})
		gu.Categories = value
	}
	if value, ok := gc.mutation.Entitlements(); ok {
		_spec.Fields = append(_spec.Fields, &sqlgraph.FieldSpec{
			Type:   field.TypeJSON,
			Value:  value,
			Column: guild.FieldEntitlements,
		})
		gu.Entitlements = value
	}
	return gu, _spec
}

// GuildCreateBulk is the builder for creating a bulk of Guild entities.
type GuildCreateBulk struct {
	config
	builders []*GuildCreate
}

// Save creates the Guild entities in the database.
func (gcb *GuildCreateBulk) Save(ctx context.Context) ([]*Guild, error) {
	specs := make([]*sqlgraph.CreateSpec, len(gcb.builders))
	nodes := make([]*Guild, len(gcb.builders))
	mutators := make([]Mutator, len(gcb.builders))
	for i := range gcb.builders {
		func(i int, root context.Context) {
			builder := gcb.builders[i]
			var mut Mutator = MutateFunc(func(ctx context.Context, m Mutation) (Value, error) {
				if err := builder.preSave(); err != nil {
					return nil, err
				}
				mutation, ok := m.(*GuildMutation)
				if !ok {
					return nil, fmt.Errorf("unexpected mutation type %T", m)
				}
				builder.mutation = mutation
				nodes[i], specs[i] = builder.createSpec()
				var err error
				if i < len(mutators)-1 {
					_, err = mutators[i+1].Mutate(root, gcb.builders[i+1].mutation)
				} else {
					// Invoke the actual operation on the latest mutation in the chain.
					if err = sqlgraph.BatchCreate(ctx, gcb.driver, &sqlgraph.BatchCreateSpec{Nodes: specs}); err != nil {
						if cerr, ok := isSQLConstraintError(err); ok {
							err = cerr
						}
					}
				}
				mutation.done = true
				if err != nil {
					return nil, err
				}
				id := specs[i].ID.Value.(int64)
				nodes[i].ID = int(id)
				return nodes[i], nil
			})
			for i := len(builder.hooks) - 1; i >= 0; i-- {
				mut = builder.hooks[i](mut)
			}
			mutators[i] = mut
		}(i, ctx)
	}
	if len(mutators) > 0 {
		if _, err := mutators[0].Mutate(ctx, gcb.builders[0].mutation); err != nil {
			return nil, err
		}
	}
	return nodes, nil
}

// SaveX calls Save and panics if Save returns an error.
func (gcb *GuildCreateBulk) SaveX(ctx context.Context) []*Guild {
	v, err := gcb.Save(ctx)
	if err != nil {
		panic(err)
	}
	return v
}
